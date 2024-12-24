FROM hexaforce/gstreamer-base:1.24.10

RUN apt-get update && apt-get install -yq \
  libjson-glib-dev \
  libgtk-4-1 \
  libegl1 \
  libxdamage1 \
  libxi6 \
  libgraphene-1.0-0 \
  libwayland-cursor0

WORKDIR /opt/
COPY . /opt/

RUN cargo build

CMD echo "Waiting a few seconds for you to open the browser at localhost:8080" \
    && sleep 10 \
    && /opt/target/debug/gst-rust \
    --peer-id=1 \
    --server=ws://signalling:8443
