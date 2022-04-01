import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { getUserState } from '@/helpers/User';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      // Only auth user
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userIsLogged = await getUserState();
  if (!userIsLogged && to.meta.auth) {
    next('/login');
  } else {
    next();
  }
});

export default router;
