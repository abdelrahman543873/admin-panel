FROM node:16.10.0


COPY . .

RUN npm install -g npm@8.19.1

RUN npm i -g @nestjs/cli

RUN npm install

ENV DB_PORT_IN_DOCKER=3306
ENV DB_HOST_IN_DOCKER=db

WORKDIR backend

CMD [ "ls" ]