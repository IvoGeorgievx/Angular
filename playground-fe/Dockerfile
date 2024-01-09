# Stage 1: Build the Angular application
FROM node:16 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the application from Nginx
FROM nginx:1.19.0-alpine

COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html/
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf