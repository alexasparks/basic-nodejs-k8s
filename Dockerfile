FROM node:14

WORKDIR /src/app

# install deps
COPY package.json /src/app
RUN npm install

# Setup workdir
COPY . /src/app

# run
EXPOSE 3000
CMD ["npm", "start"]
