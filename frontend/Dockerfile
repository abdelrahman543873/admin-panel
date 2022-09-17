FROM node

COPY . .


RUN npm install -g @angular/cli

WORKDIR frontend

RUN yarn

RUN npx cross-env NG_DEPLOY_AWS_ACCESS_KEY_ID=AKIA6IKA6RCZYFMFFP5Z NG_DEPLOY_AWS_SECRET_ACCESS_KEY=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 NG_DEPLOY_AWS_BUCKET=admin-frontend123 NG_DEPLOY_AWS_REGION=us-east-1 ng deploy
