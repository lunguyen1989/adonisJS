FROM node:12.18.1
RUN mkdir -p /app

WORKDIR app
COPY ["package*.json", "./"]
RUN npm i -g @adonisjs/cli && npm install sqlite3 --save && npm install
COPY . .
CMD ["npm", "start"]