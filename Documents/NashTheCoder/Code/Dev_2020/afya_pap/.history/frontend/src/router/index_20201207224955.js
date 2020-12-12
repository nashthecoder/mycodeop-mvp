import Vue from 'vue'
import Router from 'vue-router'
import CartPage from '@/views/CartPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductPage
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/',
    redirect: '/products'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
