
## Instalación

### Paso 1: Levantar contenedores

```bash
docker-compose up -d
```

=====================================

### Paso 2: dependencias

entra al contenedor app


```bash
composer install
```


=====================================

### Paso 3: base de datos

entra al contenedor de app

```bash
php bin/console sylius:install:database
```

=====================================

### Paso 4: dependencias node

entra al contenedor de app

ejecutar: npm install
ejecutar: npm run build

=====================================


URLS

[pagina de tienda](http://localhost/)

[pagina de admin](http://localhost/admin/)

Usuario: sylius
Password: sylius
