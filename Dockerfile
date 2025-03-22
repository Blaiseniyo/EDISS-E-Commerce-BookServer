FROM node:20.12.2-alpine as development

ENV YARN_VERSION=1.22.22

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn build


FROM node:20.12.2-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]