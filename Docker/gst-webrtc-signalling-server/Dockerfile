# docker build . -t hexaforce/gst-webrtc-signalling-server:1.24.10
# docker run -it hexaforce/gst-webrtc-signalling-server:1.24.10

FROM hexaforce/gstreamer:1.24.10 as gstreamer

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=gstreamer /usr/bin/gst-webrtc-signalling-server /usr/bin/gst-webrtc-signalling-server

EXPOSE 8443

CMD gst-webrtc-signalling-server
