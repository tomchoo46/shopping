<template>
  <div id="app">
    <div class="container">
      <div class="image">
        <img :src="product.imageUrl" alt="Product">
      </div>
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
  },
  computed: {
    product(){
      return this.$store.getters.products[0]
    }
  },
}
</script>

<style>
#app{
  background-color: #eff0f5;
  height: 100%;
  display: flex;
  align-items: center;
}
.container{
  width: 1188px;
  display: flex;
  margin: auto;
  background-color: white;
}
.image{
  width: 330px;
  height: 330px;
  margin-left: 8px;
  display: flex;
  align-items: center;
}
img{
  max-width: 100%;
}
</style>
