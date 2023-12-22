import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/HomeLayout.vue'),
    children: [
      {path: '/', name: 'home', component: () => import('../views/HomeView.vue')},
      {path: '/about', name: 'about', component: () => import('../views/AboutView.vue')},
      // {path: '/categories-artistry', name: 'categories-artistry', component: () => import('../views/CategoryView.vue')},
      {path: '/categories-artistry', name: 'categories-artistry', component: () => import('../views/CategoryView.vue')},
      {path: '/artistry', name: 'artistry', component: () => import('../views/ArtistryView.vue')},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
