FROM node:alpine3.17
RUN addgroup app && adduser -S -G app app
# Give permissions to the "app" user
WORKDIR /app/client
RUN chown -R app:app /app/client
RUN chmod -R 755 /app/client
USER app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000 
CMD ["npm","run", "dev"]
