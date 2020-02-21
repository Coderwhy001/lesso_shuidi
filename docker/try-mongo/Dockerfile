FROM daocloud.io/library/node:7.9-wheezy

RUN mkdir -p /home/project
WORKDIR /home/project

RUN chmod -R 777 /home/project
COPY . /home/project
RUN npm install --registry=https://re