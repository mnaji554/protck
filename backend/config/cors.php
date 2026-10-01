<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],


'allowed_origins' => [
    'https://protck.com',
    'https://www.protck.com',
    'https://api.protck.com',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
],
    'allowed_origins_patterns' => [
        '/^https?:\/\/(localhost|127\.0\.0\.1):(3000|5173)$/',
        '/^https:\/\/([a-z0-9-]+\.)?protck\.com$/',
    ],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];
