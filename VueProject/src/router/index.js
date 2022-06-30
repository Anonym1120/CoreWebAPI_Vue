import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BabyCardView from '../views/BabyCardView.vue'
import VoucherView from '../views/VoucherView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home', 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首頁'
        },
        component: IndexView
      },
      {
        path: '/babycard',
        name: 'babycard',
        meta: {
          title: 'babycard'
        },
        component: BabyCardView
      },
      {
        path: '/voucher',
        name: 'voucher',
        meta: {
          title: 'voucher'
        },
        component: VoucherView
      },
      
    ]
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
