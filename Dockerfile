FROM node:14.16.1

WORKDIR /app

RUN mkdir node_modules

COPY package.json .

RUN npm install

EXPOSE 4200

CMD ["npm" ,"start"]

