# How to setup VueJS in your laravel

#### Command Prompt

```bash
npm i vue@next vue-router@next
```
```bash
npm i -D @vue/compiler-sfc vue-loader@next
```
```bash
npm i -D @vue/compiler-sfc vue-loader@next
```
```bash
npm install autoprefixer@10.4.5 --save-exact
```
```bash
composer require laravel/ui ( optional )
```
```bash
php artisan ui bootstrap ( optional )
```
#### Change your file in webpack.mix.js
```javascript
mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .sourceMaps();
```
```bash
npm install && npm run dev
```
#### Setup VueJS in laravel

- Open folder resources/js/
- Make folder pages and router

#### Create file in folder pages HomeView.vue
```javascript
<template>
    <div>
        <h1>This is home view</h1>
    </div>
</template>
```
#### Create file in router pages index.js
```javascript
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/about",
        name: "about",
        component: () => import("../pages/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
```
#### Create file App.vue

```javascript
<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
</template>
```

#### Change file app.js
```javascript
import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router);
app.mount("#app");
```
### `php artisan serve`



