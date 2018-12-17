<template>
  <div id="app">
    <div class="container">
      <img src="" alt="">
      <product-detail></product-detail>
      <shipping-info></shipping-info>
    </div>
  </div>
</template>

<script>
import ProductDetail from './components/ProductDetail.vue'
import ShippingInfo from './components/ShippingInfo.vue'

export default {
  name: 'app',
  components: {
    "product-detail": ProductDetail,
    "shipping-info": ShippingInfo
  }
}
</script>

<style>
</style>
