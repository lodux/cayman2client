FROM node:lts

WORKDIR /app

COPY . .

RUN npm install --only=production

RUN npm run build --prefix client

USER node

CMD [ "npm","start","--prefix"]

EXPOSE 8800