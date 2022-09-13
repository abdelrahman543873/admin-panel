FROM node

COPY . .

RUN npm install -g @angular/cli

WORKDIR frontend

RUN yarn

ENV production=true

#ENTRYPOINT ["ng","--version"]
CMD ng serve --host 0.0.0.0 --port 4200 --disable-host-check --allowed-hosts http://admin-panel-784703093.us-east-1.elb.amazonaws.com