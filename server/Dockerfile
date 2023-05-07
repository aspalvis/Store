FROM node:alpine3.17

RUN addgroup app && adduser -S -G app app
WORKDIR /app/server

RUN chown -R app:app /app/server
RUN chmod -R 777 /app/server

USER app

COPY package*.json ./
RUN npm ci
COPY . . 

EXPOSE 3001 

CMD ["npm", "start"]