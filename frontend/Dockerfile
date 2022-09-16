FROM node

COPY . .

RUN npm install -g @angular/cli

WORKDIR frontend

RUN yarn

#ENTRYPOINT ["ng","--version"]
CMD ng serve --host 0.0.0.0 --port 80 --disable-host-check 