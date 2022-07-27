FROM node:17.1.0-alpine3.12 as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
COPY ./ ./
RUN NODE_ENV=production npm run build


FROM caddy:2-alpine
WORKDIR /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder ./app/dist .

