import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/DashboardView.vue';
import AboutView from '../views/AboutView.vue';
import BasicMathView from '../views/BasicMathView.vue';
import StringAppView from '../views/StringAppView.vue';
import Quiz from '../views/AxiosViews.vue';
import Scores from '../views/Scores.vue';

const routes = [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/string-manipulator',
        name: 'StringApp',
        component: StringAppView
    },
    {
        path: '/calculator',
        name: 'BasicMath',
        component: BasicMathView
    },
    {
        path: '/axios',
        name: 'Axios',
        component: Quiz
    },
    {
        path: '/scores',
        name: 'Scores',
        component: Scores
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router