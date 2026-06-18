import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/Home.vue')
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
    },
    {
      path:'/plan-detail',
      name:'plan-detail',
      component: () => import('../pages/PlanDetail.vue')
    }
  ]
})

export default router;
