/* vim: set sts=4 sw=4 et :
 *
 * Demo Javascript app for negotiating and streaming a sendrecv webrtc stream
 * with a GStreamer app. Runs only in passive mode, i.e., responds to offers
 * with answers, exchanges ICE candidates, and streams.
 *
 * Author: Nirbheek Chauhan <nirbheek@centricular.com>
 */

// Set this to override the automatic detection in websocketServerConnect()
var ws_protocol = 'wss'
var ws_server
var ws_port

// Set this to use a specific peer id instead of a random one
var default_peer_id

// Override with your own STUN servers if you want
var rtc_configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }

// The default constraints that will be attempted. Can be overriden by the user.
var default_constraints = { video: true, audio: true }
var connect_attempts = 0
var peer_connection = new RTCPeerConnection(rtc_configuration)
var send_channel
var ws_conn

// Local stream after constraints are approved by the user
var local_stream = null

// keep track of some negotiation state to prevent races and errors
var callCreateTriggered = false
var makingOffer = false
var isSettingRemoteAnswerPending = false

function setStatus(text) {
  console.log(text)
  var span = $('status')
  // Don't set the status if it already contains an error
  if (!span.classList.contains('error')) span.textContent = text
}

function setError(text) {
  console.error(text)
  var span = $('status')
  span.textContent = text
  span.classList.add('error')
}

// Local description was set by incoming SDP offer, send answer to peer
async function onLocalDescription(desc) {
  if (desc.type != 'answer') {
    console.warn('Expected SDP answer, received: ' + desc.type)
  }
  console.log('Got local description: ' + JSON.stringify(desc))
  await peer_connection.setLocalDescription(desc)
  var dsc = peer_connection.localDescription
  setStatus('Sending SDP ' + desc.type)
  ws_conn.send(JSON.stringify({ sdp: desc }))
}

function websocketServerConnect() {
  connect_attempts++
  if (connect_attempts > 3) {
    setError('Too many connection attempts, aborting. Refresh page to try again')
    return
  }
  // Clear errors in the status span
  var span = $('status')
  span.classList.remove('error')
  span.textContent = ''
  // Populate constraints
  var textarea = $('constraints')
  if (textarea.value == '') textarea.value = JSON.stringify(default_constraints)
  // Fetch the peer id to use
  peer_id = default_peer_id || Math.floor(Math.random() * (9000 - 10) + 10).toString()
  ws_port = ws_port || '8443'
  if (window.location.protocol.startsWith('file')) {
    ws_server = ws_server || '127.0.0.1'
  } else if (window.location.protocol.startsWith('http')) {
    ws_server = ws_server || window.location.hostname
  } else {
    throw new Error("Don't know how to connect to the signalling server with uri" + window.location)
  }
  setStatus('Connecting to server ' + `${ws_protocol}://${ws_server}:${ws_port}`)
  ws_conn = new WebSocket(`${ws_protocol}://${ws_server}:${ws_port}`)
  /* When connected, immediately register with the server */
  ws_conn.onopen = (event) => {
    $('peer-id').textContent = peer_id
    ws_conn.send('HELLO ' + peer_id)
    setStatus('Registering with server')
    $('peer-connect-button').value = 'Connect'
    // Reset connection attempts because we connected successfully
    connect_attempts = 0
  }
  ws_conn.onmessage = async (event) => {
    console.log('Received ' + event.data)
    switch (event.data) {
      case 'HELLO':
        setStatus('Registered with server, waiting for call')
        return
      case 'SESSION_OK':
        setStatus('Starting negotiation')
        if ($('remote-offerer').checked) {
          ws_conn.send('OFFER_REQUEST')
          setStatus('Sent OFFER_REQUEST, waiting for offer')
          return
        }
        if (!callCreateTriggered) {
          createCall()
          setStatus('Created peer connection for call, waiting for SDP')
        }
        return
      case 'OFFER_REQUEST':
        // The peer wants us to set up and then send an offer
        if (!callCreateTriggered) createCall()
        return
      default:
        // Handle incoming JSON SDP and ICE messages
        const msg = parseMessage(event)
        // Incoming JSON signals the beginning of a call
        if (!callCreateTriggered) createCall(msg)
        if (msg.sdp != null) {
          const { sdp } = msg
          try {
            // An offer may come in while we are busy processing SRD(answer).
            // In this case, we will be in "stable" by the time the offer is processed so it is safe to chain it on our Operations Chain now.
            const readyForOffer = !makingOffer && (peer_connection.signalingState == 'stable' || isSettingRemoteAnswerPending)
            const offerCollision = sdp.type == 'offer' && !readyForOffer
            if (offerCollision) {
              return
            }
            isSettingRemoteAnswerPending = sdp.type == 'answer'
            await peer_connection.setRemoteDescription(sdp)
            setStatus('Remote SDP set')
            isSettingRemoteAnswerPending = false
            if (sdp.type == 'offer') {
              setStatus('Got SDP offer, waiting for getUserMedia to complete')
              await local_stream
              setStatus('getUserMedia to completed, setting local description')
              await peer_connection.setLocalDescription()
              let desc = peer_connection.localDescription
              console.log('Got local description: ' + JSON.stringify(desc))
              setStatus('Sending SDP ' + desc.type)
              ws_conn.send(JSON.stringify({ sdp: desc }))
              if (peer_connection.iceConnectionState == 'connected') {
                setStatus('SDP ' + desc.type + ' sent, ICE connected, all looks OK')
              }
            }
          } catch (err) {
            setError('ERROR: ' + err)
            ws_conn.close()
          }
        } else if (msg.ice != null) {
          const { ice } = msg
          // ICE candidate received from peer, add it to the peer connection
          var candidate = new RTCIceCandidate(ice)
          peer_connection.addIceCandidate(candidate).catch(setError)
        } else {
          setError('ERROR: ' + 'Unknown incoming JSON: ' + msg)
          ws_conn.close()
        }
    }
  }
  ws_conn.onclose = async (event) => {
    setStatus('Disconnected from server')
    // Release the webcam and mic
    if (local_stream) {
      const stream = await local_stream
      if (stream) {
        stream.getTracks().forEach(function (track) {
          track.stop()
        })
      }
      local_stream = null
    }
    // Remove all video players
    $('video').innerHTML = ''
    if (peer_connection) {
      peer_connection.close()
      peer_connection = new RTCPeerConnection(rtc_configuration)
    }
    callCreateTriggered = false
    // Reset after a second
    window.setTimeout(websocketServerConnect, 1000)
  }
  ws_conn.onerror = (event) => {
    setError('Unable to connect to server, did you add an exception for the certificate?')
    // Retry after 3 seconds
    window.setTimeout(websocketServerConnect, 3000)
  }
}

function createCall(msg) {
  callCreateTriggered = true
  console.log('Configuring RTCPeerConnection')
  send_channel = peer_connection.createDataChannel('label', null)
  send_channel.onopen = (event) => console.log('dataChannel.OnOpen', event)
  send_channel.onmessage = (event) => {
    console.log('dataChannel.OnMessage:', event, event.data.type)
    setStatus('Received data channel message')
    if (typeof event.data === 'string' || event.data instanceof String) {
      console.log('Incoming string message: ' + event.data)
      textarea = $('text')
      textarea.value = textarea.value + '\n' + event.data
    } else {
      console.log('Incoming data message')
    }
    send_channel.send('Hi! (from browser)')
  }
  send_channel.onerror = (error) => console.log('dataChannel.OnError:', error)
  send_channel.onclose = (event) => console.log('dataChannel.OnClose', event)
  peer_connection.ondatachannel = (event) => {
    setStatus('Data channel created')
    let receiveChannel = event.channel
    receiveChannel.onopen = (event) => console.log('dataChannel.OnOpen', event)
    receiveChannel.onmessage = (event) => {
      console.log('dataChannel.OnMessage:', event, event.data.type)
      setStatus('Received data channel message')
      if (typeof event.data === 'string' || event.data instanceof String) {
        console.log('Incoming string message: ' + event.data)
        textarea = $('text')
        textarea.value = textarea.value + '\n' + event.data
      } else {
        console.log('Incoming data message')
      }
      send_channel.send('Hi! (from browser)')
    }
    receiveChannel.onerror = (error) => console.log('dataChannel.OnError:', error)
    receiveChannel.onclose = (event) => console.log('dataChannel.OnClose', event)
  }
  peer_connection.ontrack = ({ track, streams }) => {
    console.log('ontrack triggered')
    var div = $('video')
    var videoElem = document.createElement('video')
    videoElem.textContent = "Your browser doesn't support video"
    videoElem.autoplay = true
    videoElem.playsinline = true
    div.appendChild(videoElem)
    if (track.kind === 'audio') videoElem.style.display = 'none'
    videoElem.srcObject = streams[0]
    videoElem.srcObject.addEventListener('mute', (e) => {
      console.log('track muted, hiding video element')
      videoElem.style.display = 'none'
    })
    videoElem.srcObject.addEventListener('unmute', (e) => {
      console.log('track unmuted, showing video element')
      videoElem.style.display = 'block'
    })
    videoElem.srcObject.addEventListener('removetrack', (e) => {
      console.log('track removed, removing video element')
      videoElem.remove()
    })
  }
  peer_connection.onicecandidate = (event) => {
    // We have a candidate, send it to the remote party with the same uuid
    if (event.candidate == null) {
      console.log('ICE Candidate was null, done')
      return
    }
    ws_conn.send(JSON.stringify({ ice: event.candidate }))
  }
  peer_connection.oniceconnectionstatechange = (event) => {
    if (peer_connection.iceConnectionState == 'connected') {
      setStatus('ICE gathering complete')
    }
  }
  // let the "negotiationneeded" event trigger offer generation
  peer_connection.onnegotiationneeded = async () => {
    setStatus('Negotiation needed')
    if ($('remote-offerer').checked) return
    try {
      makingOffer = true
      await peer_connection.setLocalDescription()
      let desc = peer_connection.localDescription
      setStatus('Sending SDP ' + desc.type)
      ws_conn.send(JSON.stringify({ sdp: desc }))
    } catch (err) {
      setError('ERROR: ' + err)
      ws_conn.close()
    } finally {
      makingOffer = false
    }
  }

  $('peer-connect-button').value = 'Disconnect'

  // Add local stream
  if (navigator.mediaDevices.getUserMedia) {
    local_stream = getLocalStream()
  } else {
    setError("Browser doesn't support getUserMedia!")
  }
}

function parseMessage(event) {
  if (event.data.startsWith('ERROR')) {
    setError('ERROR: ' + event.data)
    ws_conn.close()
    return null
  }
  try {
    return JSON.parse(event.data)
  } catch (e) {
    if (e instanceof SyntaxError) {
      setError('ERROR: ' + 'Error parsing incoming JSON: ' + event.data)
    } else {
      setError('ERROR: ' + 'Unknown error parsing response: ' + event.data)
    }
    ws_conn.close()
    return null
  }
}

async function getLocalStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(default_constraints)
    console.log('Adding local stream')
    for (const track of stream.getTracks()) {
      peer_connection.addTrack(track, stream)
    }
    return stream
  } catch (err) {
    setError('ERROR: ' + err)
  }
}
