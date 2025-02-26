FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 8084

CMD ["pnpm", "start"]
