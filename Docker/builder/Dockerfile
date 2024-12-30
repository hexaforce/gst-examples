# docker build . -t hexaforce/gstreamer-builder:1.24.10

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
  cmake \ 
  libc6-dev \
  libunwind-dev \
  libdw-dev \
  libgsl-dev \
  bash-completion \
  libcap-dev \
  libgtk-3-dev \
  libcap2-bin \
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
