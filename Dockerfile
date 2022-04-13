FROM nginx:alpine

MAINTAINER LFR502

WORKDIR /usr/share/nginx/html
COPY dist /usr/share/nginx/html


EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]