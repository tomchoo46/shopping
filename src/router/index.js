import Vue from 'vue'
import Router from 'vue-router'
import ProductPage from '@/components/ProductPage'
import OrderPage from '@/components/OrderPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/order',
      name: 'OrderPage',
      component: OrderPage
    },
  ],
  mode: 'history'
})
