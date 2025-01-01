import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/overview',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      {
        path: 'overview',
        component: () => import('../views/overview/Overview.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router