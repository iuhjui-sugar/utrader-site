FROM node:16
EXPOSE 3002
WORKDIR /var/www/dist/site
COPY ./ /var/www
RUN npm install -g npm@8.9.0
RUN npm install -g http-server
CMD http-server -p 3002



