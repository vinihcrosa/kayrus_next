FROM node:alpine

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package.json /app/
RUN npm install && npm install -g react-scripts

COPY ./ /usr/app/

