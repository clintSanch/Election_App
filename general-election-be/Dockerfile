FROM node:22
# Set the working directory in the container
WORKDIR /general-election-be
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
CMD [ "node", "dist/main.js" ]