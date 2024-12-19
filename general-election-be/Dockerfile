ARG app_version=1.0
FROM node:22
ARG DeploymentStage = Development
ENV key=${DeploymentStage}
# Set the working directory in the container
WORKDIR /general-election-be
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "start" ]