FROM node

COPY . .

RUN npm install -g @angular/cli

WORKDIR frontend

RUN yarn

ENV production=true

#ENTRYPOINT ["ng","--version"]
CMD ng serve --port 4200 --disable-host-check 