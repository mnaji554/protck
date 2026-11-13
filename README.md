# Protck

Protck is a Laravel application. The public website is rendered with Blade, and contact form submissions are validated and saved by Laravel.

## Run locally

```sh
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

The site is available at `http://127.0.0.1:8000`. The landing page uses the `services`, `why_us_items`, `projects`, and `partners` tables; content is managed in the Laravel admin panel.

## Run tests

```sh
cd backend
php artisan test
```

The Docker image runs the Laravel application on port `3000`. Set `APP_KEY` in the deployment environment (generate one with `cd backend && php artisan key:generate --show`). The image initializes a fresh SQLite database; mount `database/database.sqlite` or configure an external database if submitted contacts and admin content must persist across container replacement.
