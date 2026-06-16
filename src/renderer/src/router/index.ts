import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/create-mydo'
    },
    {
      path: '/create-mydo',
      name: 'create-mydo',
      component: () => import('../pages/CreateMydo.vue')
    },
    {
      path: '/date',
      name: 'date',
      component: () => import('../pages/Date.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../pages/My.vue')
    }
  ]
})
