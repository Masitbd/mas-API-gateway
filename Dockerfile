FROM node:21-alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
#COPY .env.example .env
#RUN npm run build
CMD ["npm","run","dev"]