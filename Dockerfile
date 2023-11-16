# compilation
FROM node:18 as build

WORKDIR /app
COPY . /app

RUN npm install -g @angular/cli@16.2.1
RUN npm install
RUN npm run build --configuration=production

# execution
FROM nginx:latest
COPY --from=build /app/dist/webmerca /usr/share/nginx/html
COPY --from=build /app/docker/nginx/nginx.conf /etc/nginx/conf.d/nginx_conf.template

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/nginx_conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"