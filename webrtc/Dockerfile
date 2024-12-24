# docker build . -t hexaforce/gstreamer-base:1.24.10

FROM rust:bookworm

ARG GST_VERSION=1.24.10

RUN apt-get update && apt-get install -y --no-install-recommends \
  autoconf `# build tools` \
  automake `# build tools` \
  bison `# build tools` \
  build-essential `# build tools` \
  ca-certificates \
  flex `# build tools` \
  gettext \
  git \ 
  gnutls-dev `# libnice` \
  gtk-doc-tools `# documentation tools` \
  libffi-dev \
  libglib2.0-dev `# GStreamer dependencies` \
  libnice-dev `# libnice for WebRTC` \
  libsoup2.4-dev `# HTTP library for GStreamer` \
  libsrtp2-dev `# Secure RTP for WebRTC` \
  libssl-dev `# SSL/TLS for DTLS` \
  libtool `# build tools` \
  ninja-build `# build tools` \
  python3-dev `# Python bindings` \
  python3-pip `# Python package manager` \
  python-gi-dev `# Python GObject introspection` \
  wget \
  zlib1g `# compression library` \
  mount `# system utility` \
  perl \
  libpcre3-dev `# PCRE (Perl Compatible Regular Expressions)` \
  \
  # FFMpeg and related libraries
  libavfilter-dev `# FFMpeg filters` \
  libavcodec-dev `# FFMpeg codecs` \
  libavformat-dev `# FFMpeg format support` \
  libswscale-dev `# FFMpeg scaling support` \
  libpostproc-dev `# FFMpeg post-processing` \
  libavutil-dev `# FFMpeg utility functions` \
  libswresample-dev `# FFMpeg resampling` \
  \
  # Video codecs
  libaom-dev `# AV1 codec` \
  libdav1d-dev `# AV1 decoder` \
  libgav1-dev `# AV1 decoder` \
  librav1e-dev `# AV1 encoder` \
  libsvtav1-dev `# Scalable Video Technology for AV1` \
  libsvtav1dec-dev `# SVT-AV1 decoder` \
  libsvtav1enc-dev `# SVT-AV1 encoder` \
  libvpx-dev `# VP8/VP9 codec` \
  x264 `# H.264 encoder` \
  libx264-dev `# H.264 encoder` \
  x265 `# H.265 encoder` \
  libx265-dev `# H.265 encoder` \
  libde265-dev `# H.265 decoder` \
  libopenh264-dev `# H.264 decoder` \
  \
  # Audio codecs
  libmp3lame-dev `# MP3 encoder` \
  libopus-dev `# Opus codec` \
  libvorbis-dev `# Vorbis codec` \
  libtheora-dev `# Theora codec` \
  \
  # Image codecs
  libjpeg-dev `# JPEG codec` \
  libpng-dev `# PNG codec`

RUN apt-get remove --purge libsoup-3.0-dev -y
RUN pip3 install --break-system-packages meson
RUN cargo install cargo-c 

# http://www.linuxfromscratch.org/blfs/view/svn/multimedia/gstreamer10.html
RUN wget https://gstreamer.freedesktop.org/src/gstreamer/gstreamer-$GST_VERSION.tar.xz \
 && tar xvfJ gstreamer-$GST_VERSION.tar.xz > /dev/null \
 && cd gstreamer-$GST_VERSION \
 && meson --prefix=/usr build && ninja -C build && ninja -C build install \
 && cd / 

# gst-plugins-base
RUN wget https://gstreamer.freedesktop.org/src/gst-plugins-base/gst-plugins-base-$GST_VERSION.tar.xz \
 && tar xvfJ gst-plugins-base-$GST_VERSION.tar.xz > /dev/null \
 && cd gst-plugins-base-$GST_VERSION \
 && meson --prefix=/usr build && ninja -C build && ninja -C build install \
 && cd / 

# libnice
RUN git clone https://github.com/libnice/libnice.git \
 && cd libnice \
 && PATH=~/.local/bin:$PATH meson --prefix=/usr build && ninja -C build && ninja -C build install \
 && cd / 

# gst-plugins-good
RUN wget https://gstreamer.freedesktop.org/src/gst-plugins-good/gst-plugins-good-$GST_VERSION.tar.xz \
 && tar xvfJ gst-plugins-good-$GST_VERSION.tar.xz > /dev/null \
 && cd gst-plugins-good-$GST_VERSION \
 && meson --prefix=/usr build && ninja -C build && ninja -C build install \
 && cd / 

# gst-plugins-bad
RUN wget https://gstreamer.freedesktop.org/src/gst-plugins-bad/gst-plugins-bad-$GST_VERSION.tar.xz \
 && tar xvfJ gst-plugins-bad-$GST_VERSION.tar.xz > /dev/null \
 && cd gst-plugins-bad-$GST_VERSION \
 && meson --prefix=/usr -Dgpl=enabled build && ninja -C build && ninja -C build install \
 && cd / 

# gst-plugins-ugly
RUN wget https://gstreamer.freedesktop.org/src/gst-plugins-ugly/gst-plugins-ugly-$GST_VERSION.tar.xz \
 && tar xvfJ gst-plugins-ugly-$GST_VERSION.tar.xz > /dev/null \
 && cd gst-plugins-ugly-$GST_VERSION \
 && meson --prefix=/usr -Dgpl=enabled build && ninja -C build && ninja -C build install \
 && cd / 

# gst-omx
# RUN wget https://gstreamer.freedesktop.org/src/gst-omx/gst-omx-$GST_VERSION.tar.xz \
#  && tar xvfJ gst-omx-$GST_VERSION.tar.xz > /dev/null \
#  && cd gst-omx-$GST_VERSION \
#  && meson --prefix=/usr -Dgpl=enabled build && ninja -C build && ninja -C build install \
#  && cd / 

# gst-rtsp-server
RUN wget https://gstreamer.freedesktop.org/src/gst-rtsp-server/gst-rtsp-server-$GST_VERSION.tar.xz \
 && tar xvfJ gst-rtsp-server-$GST_VERSION.tar.xz > /dev/null \
 && cd gst-rtsp-server-$GST_VERSION \
 && meson --prefix=/usr build && ninja -C build && ninja -C build install \
 && cd / 

# gst-rtsp
# RUN wget https://gstreamer.freedesktop.org/src/gst-rtsp/gst-rtsp-$GST_VERSION.tar.xz \
#  && tar xvfJ gst-rtsp-$GST_VERSION.tar.xz > /dev/null \
#  && cd gst-rtsp-$GST_VERSION \
#  && meson --prefix=/usr build && ninja -C build && ninja -C build install \
#  && cd / 

# gst-libav
RUN wget https://gstreamer.freedesktop.org/src/gst-libav/gst-libav-$GST_VERSION.tar.xz \
 && tar xvfJ gst-libav-$GST_VERSION.tar.xz > /dev/null \
 && cd gst-libav-$GST_VERSION \
 && meson --prefix=/usr build && ninja -C build && ninja -C build install \
 && cd / 

# gst-python
RUN wget https://gstreamer.freedesktop.org/src/gst-python/gst-python-$GST_VERSION.tar.xz \
 && tar xvfJ gst-python-$GST_VERSION.tar.xz > /dev/null \
 && cd gst-python-$GST_VERSION \
 && meson --prefix=/usr build && ninja -C build && ninja -C build install \
 && cd / 

# gst-plugins-rs
RUN wget https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs/-/archive/gstreamer-$GST_VERSION/gst-plugins-rs-gstreamer-$GST_VERSION.tar.gz \
 && tar -xvf gst-plugins-rs-gstreamer-$GST_VERSION.tar.gz > /dev/null \
 && cd gst-plugins-rs-gstreamer-$GST_VERSION \
 && meson --prefix=/usr build && ninja -C build -j$(nproc) && ninja -C build install \
 && cd / 

RUN apt autoremove -y
RUN rm -rf gst*
