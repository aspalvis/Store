FROM node:alpine3.17
RUN apk update && \
    apk add --no-cache nodejs npm && \
    npm install -g nodemon
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY . .

USER root
RUN chown -R root:appgroup /app
RUN chmod -R 770 /app

USER appuser
RUN cd ./server && npm install
ENV NODE_ENV=development
EXPOSE 4000
RUN cd ./server && npm run build

# Use official MongoDB image
FROM mongo:4.4

# Copy the built server code to the image
COPY --from=0 /app /app

# Set the working directory and start the server
WORKDIR /app/server
ENTRYPOINT npm start
