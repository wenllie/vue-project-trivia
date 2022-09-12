import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import AxiosViews from '../views/AxiosViews.vue'
import HomeView from '../views/DashboardView.vue'
import AboutView from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/string-manipulator',
      name: 'StringManipulator',
      component: StringAppView
    },
    {
    path: '/calculator',
    name: 'Calculator',
    component: BasicMathView
    },
    {
      path: '/axios',
      name: 'axios',
      component: AxiosViews
      },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      },
  ]
})

export default router
