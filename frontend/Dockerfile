FROM node

COPY . .

RUN npm install -g @angular/cli

WORKDIR frontend

RUN yarn

ENV production=true

#ENTRYPOINT ["ng","--version"]
CMD ng serve --host http://admin-panel-784703093.us-east-1.elb.amazonaws.com --port 4200 --disable-host-check 