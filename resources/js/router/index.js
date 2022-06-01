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
