import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/Views/Login/LoginPage.vue';
import HomePage from '@/Views/Home/HomePage.vue';
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
];

const router = createRouter({
    history:  createWebHistory(),
    routes
});

export default router;
