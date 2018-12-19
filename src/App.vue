<template>
  <div id="app">
    <product-page v-if="false"/>
    <order-page/>
  </div>
</template>

<script>
import ProductPage from './components/ProductPage.vue'
import OrderPage from './components/OrderPage.vue'

export default {
  name: 'app',
  components: {
    "product-page": ProductPage,
    "order-page": OrderPage
  },
  computed: {
  },
}
</script>

<style scoped>
#app{
  background-color: #eff0f5;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
