const mix = require('laravel-mix')

mix
    .vue()
    .js('src/app.js', 'dist/')
    .sass('src/app.scss', 'dist/')
