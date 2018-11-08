FROM node:8-slim

WORKDIR /holyjs
ENV NODE_ENV development

COPY package.json /holyjs/package.json

RUN npm install --production

COPY .env.example /holyjs/.env
COPY . /holyjs

CMD ["npm", "start"]

EXPOSE 8080
