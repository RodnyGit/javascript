FROM node:12
COPY ["package.json","/usr/src/"]
WORKDIR /usr/src/
RUN npm i
COPY [".","/usr/src/"]
CMD ["node","index.js"]
