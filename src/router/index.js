import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/HomeLayout.vue'),
    children: [
      {path: '/', name: 'home', component: () => import('../views/HomeView.vue')},
      {path: '/about', name: 'about', component: () => import('../views/AboutView.vue')},
      {path: '/categories-artistry', name: 'categories-artistry', component: () => import('../views/CategoryView.vue')},

      // GAMAU
      {path: '/categories-artistry/performing-arts-heritage', name: 'categories-detail', component: () => import('../views/CategoryDetailView.vue')},
      {path: '/blogs', name: 'blogs', component: () => import('../views/BlogView.vue')},
      {path: '/blogs/unraveling-the-threads-of-indonesias-cultural-fabric', name: 'blogs-detail', component: () => import('../views/BlogDetailView.vue')},
      // END GAMAU

      {path: '/artistry', name: 'artistry', component: () => import('../views/ArtistryView.vue')},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
