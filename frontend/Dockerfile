FROM node
WORKDIR frontend/app
COPY . frontend/app
RUN yarn
RUN npm install -g @angular/cli

#ENTRYPOINT ["ng","--version"]
CMD ng serve --host 0.0.0.0 --port 4200