FROM node

COPY . .

RUN npm install -g @angular/cli

WORKDIR frontend

RUN yarn

ENV production=true

#ENTRYPOINT ["ng","--version"]
CMD ng serve --host 34.202.5.152 --port 4200 --disable-host-check 