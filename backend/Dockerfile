FROM node:16.10.0

COPY . .

RUN npm i -g @nestjs/cli

WORKDIR backend

RUN yarn

ENV DB_PORT_IN_DOCKER=3307
ENV DB_HOST_IN_DOCKER=35.153.166.231


CMD [ "yarn", "start" ]