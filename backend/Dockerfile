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
ENV ONLINE_HOST=http://loadbalancer-1191738629.us-west-2.elb.amazonaws.com


CMD [ "yarn", "start" ]