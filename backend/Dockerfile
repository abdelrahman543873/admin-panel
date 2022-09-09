FROM node:16.10.0

COPY . .

COPY backend/package.json .

RUN yarn

ENV DB_PORT_IN_DOCKER=3306
ENV DB_HOST_IN_DOCKER=db

CMD [ "nest", "start" ]