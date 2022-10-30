FROM node:16.10.0

COPY . .

RUN npm i -g @nestjs/cli

WORKDIR backend

RUN yarn

ENV DB_PORT_IN_DOCKER=3306
ENV DB_HOST_IN_DOCKER=bonatstag.csitjafwqp3l.us-east-2.rds.amazonaws.com
ENV DB_USERNAME_IN_DOCKER=dbuserstg
ENV DB_NAME_IN_DOCKER=BonatStag
ENV DB_PASSWORD_IN_DOCKER=G3akpPMnFsFTCUAnHUUrYfDPU
ENV ONLINE_HOST=http://admin-panel-784703093.us-east-1.elb.amazonaws.com/backend/


CMD [ "yarn", "start" ]