FROM node:16-alpine

WORKDIR /modules

COPY package.json .

RUN npm install express pg-promise cors dotenv ejs

COPY . .

EXPOSE 5000

CMD ["node", "main.js"]