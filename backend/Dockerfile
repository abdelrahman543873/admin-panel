FROM node:16.10.0

COPY . .

RUN npm i -g @nestjs/cli

WORKDIR backend

RUN yarn

ENV DB_PORT_IN_DOCKER=3307
ENV DB_HOST_IN_DOCKER=44.192.80.124
ENV ONLINE_HOST=http://admin-panel-784703093.us-east-1.elb.amazonaws.com/backend/


CMD [ "yarn", "start" ]