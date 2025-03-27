FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# permet d'utiliser app.js
COPY . .

EXPOSE 8002

CMD [ "node","app.js" ]