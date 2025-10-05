FROM php:8.4-fpm

# Instalar dependencias del sistema, incluyendo soporte WebP
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    libicu-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libgd-dev \
    libwebp-dev \
    && rm -rf /var/lib/apt/lists/*

# Instalar extensiones PHP necesarias para Sylius, habilitando WebP en GD
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install -j$(nproc) \
        pdo_mysql \
        mbstring \
        xml \
        zip \
        gd \
        intl \
        opcache \
        exif

# Instalar Xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

# Configurar Xdebug
RUN echo "xdebug.mode=develop,debug" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_host=host.docker.internal" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_port=9003" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.log=/tmp/xdebug.log" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instalar Node.js y npm (necesarios para Sylius)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

# Crear usuario para desarrollo
RUN groupadd -g 1000 www \
    && useradd -u 1000 -ms /bin/bash -g www www

# Establecer directorio de trabajo
WORKDIR /var/www/html

# Cambiar propietario del directorio de trabajo
RUN chown -R www:www /var/www/html

# Cambiar PHP-FPM a TCP 9000 correctamente
RUN sed -i 's|listen = .*|listen = 0.0.0.0:9000|' /usr/local/etc/php-fpm.d/www.conf
USER www

EXPOSE 9000
CMD ["php-fpm"]
