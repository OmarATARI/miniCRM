
# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN yarn install -qy
COPY client/ ./
RUN yarn run build


# Setup the server

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN yarn install -qy
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["yarn", "start"]
