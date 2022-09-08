FROM node:16.10.0

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

ENV DB_PORT_IN_DOCKER=3306
ENV DB_HOST_IN_DOCKER=db

CMD [ "yarn", "start" ]