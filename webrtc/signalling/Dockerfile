FROM python:slim-bookworm

# It is not compatible with version 11 or later.
RUN pip3 install --user websockets==10.4

WORKDIR /opt/
COPY . /opt/

CMD python -u ./simple_server.py --disable-ssl
# CMD python -u ./simple_server.py --cert-path ./ --health /health
