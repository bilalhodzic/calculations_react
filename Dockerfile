FROM nginx:1.15.2-alpine
COPY ./build /var/www/nyckeltalskalkyler.com/
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]