FROM node:18.20.4-alpine
RUN npm config set registry https://registry.npmmirror.com && \
    npm install pm2@5.4.2 -g && \
    npm install -g verdaccio@5.32.1
WORKDIR /unpkg/
COPY . .
EXPOSE 8899 4873
CMD ["pm2-runtime", "/unpkg/ecosystem.config.js"]