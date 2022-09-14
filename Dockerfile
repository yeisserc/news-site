# stage 1 - Build the react app
FROM node:16.17.0-alpine3.15 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.23.1-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

COPY --from=build /usr/src/app/mockApi /usr/src/app/mockApi

WORKDIR /usr/src/app

RUN npm run start:server

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]