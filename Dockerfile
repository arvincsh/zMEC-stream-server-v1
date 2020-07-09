FROM ubuntu:18.04

RUN mkdir /home/work
WORKDIR /home/work

RUN apt update -y && apt install -y sudo && apt install -y vim && apt install -y curl && apt install -y git

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

RUN apt install -y nodejs

RUN git clone https://github.com/arvincsh/zMEC-stream-server-v1.git

WORKDIR /home/work/zMEC-stream-server-v1/server

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get install -y tzdata && apt-get install -y libopencv-dev

RUN npm install 

CMD [ "node", /home/work/zMEC-stream-server-v1/server/server.js" ]