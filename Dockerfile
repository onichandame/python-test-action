FROM alpine:3.11
RUN apk add git python3 python3-dev libffi-dev musl-dev openssl-dev gcc
ADD run.sh /run.sh
ENTRYPOINT ["/run.sh"]
