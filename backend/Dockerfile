FROM node:16.10.0

COPY . .

RUN npm i -g @nestjs/cli

WORKDIR backend

RUN yarn

ENV DB_PORT_IN_DOCKER=3306
ENV DB_HOST_IN_DOCKER=172.31.34.210


CMD [ "yarn", "start" ]