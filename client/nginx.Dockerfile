FROM node as build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist .