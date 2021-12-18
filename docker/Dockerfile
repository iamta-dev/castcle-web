### STAGE 1: Build ###
FROM node:16-buster-slim AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install -g yarn --force
RUN yarn install
RUN yarn build

### STAGE 2: Run ###
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]