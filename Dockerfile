FROM node:12-alpine

RUN mkdir app
WORKDIR /app

COPY ./package.json ./package.json
RUN npm i
COPY ./src ./src
ENTRYPOINT [ "npm", "start" ]