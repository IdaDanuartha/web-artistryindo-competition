import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('../views/Auth/LoginView.vue')
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: () => import('../views/Auth/SignupView.vue')
  },
  {
    path: '/',
    component: () => import('../layouts/HomeLayout.vue'),
    children: [
      {path: '/', name: 'home', component: () => import('../views/HomeView.vue')},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
