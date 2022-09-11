FROM node
WORKDIR frontend
COPY . frontend
RUN yarn
RUN npm install -g @angular/cli

#ENTRYPOINT ["ng","--version"]
# CMD ng serve --host 0.0.0.0 --port 4200
CMD ls