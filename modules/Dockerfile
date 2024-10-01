FROM node:16-alpine

WORKDIR /modules

COPY package.json .

RUN npm install express pg-promise cors dotenv ejs nodemon

COPY . .

EXPOSE 5000

CMD ["npm", "start"]