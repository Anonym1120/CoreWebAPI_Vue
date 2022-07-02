import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import BabyCardView from '../views/BabyCardView.vue'
import VoucherView from '../views/VoucherView.vue'
import BaseForm from '../views/BaseFormView.vue'

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
          title: '享享卡報表'
        },
        component: BabyCardView
      },
      {
        path: '/voucher',
        name: 'voucher',
        meta: {
          title: '電子劵報表'
        },
        component: VoucherView
      },
      {
        path: '/baseform',
        name: 'baseform',
        meta: {
          title : '表單',
        },
        component: BaseForm,
      },
    ]
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
