FROM php:8.4-cli-alpine

RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS icu-dev libzip-dev sqlite-dev \
    && docker-php-ext-install intl pdo_sqlite zip \
    && apk del .build-deps

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY backend/ ./

RUN mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views storage/logs bootstrap/cache \
    && composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader \
    && touch database/database.sqlite \
    && php artisan migrate --force \
    && chown -R www-data:www-data storage bootstrap/cache database

EXPOSE 3000

USER www-data

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=3000"]
