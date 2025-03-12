import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/View/Login/LoginPage.vue';
import HomePage from '@/View/Home/HomePage.vue';
import ErrorPage from '@/components/Template/404.vue'
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
    {
        path: '/*',
        name: 'Error',
        component: ErrorPage,
    }
];

const router = createRouter({
    history:  createWebHistory(),
    routes
});

export default router;
