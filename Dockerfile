From node: 16-alpine

Run mkdir -p /app

WORKDIR /app

COPY package.json /app

Run yarn install

COPY . /app

RUN yarn build

# USER next.js

EXPOSE 3000

CMD [ "yarn", "start" ]