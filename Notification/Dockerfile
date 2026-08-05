FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"

RUN npx prisma generate

EXPOSE 4004

CMD [ "sh","-c","npx prisma migrate deploy && node src/index.js" ]