<template>
  <div id="app">
    <product-detail></product-detail>
  </div>
</template>

<script>
import ProductDetail from './components/ProductDetail.vue'

export default {
  name: 'app',
  components: {
    "product-detail": ProductDetail
  }
}
</script>

<style>

</style>
