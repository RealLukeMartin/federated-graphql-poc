FROM node:16-alpine as deps
RUN apk add --virtual builds-deps make gcc g++ build-base python3
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python3

FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build:all

FROM node:16-alpine AS runner
RUN apk add --virtual builds-deps make gcc g++ build-base python3
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
RUN npm ci --production=true --ignore-scripts && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python3

USER nodejs

EXPOSE 4000

CMD ["node", "dist/index"]
