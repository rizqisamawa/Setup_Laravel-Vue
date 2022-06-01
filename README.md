# How to setup vue in your laravel

#### Command Prompt

-   npm i vue@next vue-router@next
-   npm i -D @vue/compiler-sfc vue-loader@next
-   npm install autoprefixer@10.4.5 --save-exact
-   composer require laravel/ui ( optional )
-   php artisan ui bootstrap ( optional )

```javascript
mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .sourceMaps();
```

```bash
npm install && npm run dev
```
