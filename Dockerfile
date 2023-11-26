FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

RUN apk add --no-cache gcc musl-dev linux-headers

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
