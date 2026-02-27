FROM node:18.12

WORKDIR /opt/api-node

ENV PORT 80

COPY package*.json ./

RUN npm config set @mundiale-private:registry https://registry.mundiale.com.br/repository/mundiale-private/ && npm ci --production --ignore-scripts

COPY . .

EXPOSE $PORT
CMD [ "npm", "start" ]
