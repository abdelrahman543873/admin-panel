FROM node:16.10.0

COPY . .

RUN yarn

RUN npm install -g @angular/cli

EXPOSE 4200

CMD [ "ng", "serve" ]
