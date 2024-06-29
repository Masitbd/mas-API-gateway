FROM node:21-alpine
ENV PORT=${PORT}
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm","run","dev"]