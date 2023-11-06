# Usar una imagen base de Node.js
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g typescript

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
