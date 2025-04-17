FROM node:22

# Create app directory
WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
