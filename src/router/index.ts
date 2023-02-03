import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainPage.vue')
    },
    {
      path: '/graph/:id?:',
      component: () => import('@/views/graph/GraphPage.vue')
    }
  ]
})

export default router
