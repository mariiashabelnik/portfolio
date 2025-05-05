FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM caddy:2-alpine
WORKDIR /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist .

