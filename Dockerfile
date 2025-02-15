FROM node:21-alpine
ENV PORT=${PORT}
COPY ./package.json .
RUN yarn install && \
    yarn run build && \
    yarn cache clean --force && \
    rm -rf /root/.npm && \
    rm -rf node_modules

COPY . .
CMD ["npm","run","dev"]