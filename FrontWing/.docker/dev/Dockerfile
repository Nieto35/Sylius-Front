# syntax=docker/dockerfile:1
FROM node:22-alpine

# Crear directorio de trabajo y asignar permisos a node:node (UID/GID 1000)
WORKDIR /var/www/html
RUN mkdir -p /var/www/html && chown node:node /var/www/html

# Cambiar al usuario node (UID/GID 1000)
USER node

# Por defecto, iniciar una shell en la carpeta del proyecto
CMD ["/bin/sh"]
