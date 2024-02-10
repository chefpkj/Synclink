FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i nodemon
COPY . .
EXPOSE 4000
CMD ["npm", "start"]