
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'orders', component: () => import('pages/Orders.vue') },
      { path: 'holdings', component: () => import('pages/Holdings.vue') },
      { path: 'positions', component: () => import('pages/Positions.vue') },
      { path: 'funds', component: () => import('pages/Funds.vue') },
      { path: 'app', component: () => import('pages/AppsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
