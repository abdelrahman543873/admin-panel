FROM node

COPY . .

RUN npm install -g @angular/cli

WORKDIR frontend

RUN yarn

#ENTRYPOINT ["ng","--version"]
RUN ng build

CMD ['node','server.js']