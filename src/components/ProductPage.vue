<template>
  <div class="container">
    <div class="image">
      <img :src="product.imageUrl" alt="Product">
    </div>
    <product-detail :product="product" :userData="userData" />
    <shipping-info :store="product.store"/>
  </div>
</template>

<script>
import ProductDetail from './ProductDetail.vue'
import ShippingInfo from './ShippingInfo.vue'

export default {
  name: 'app',
  components: {
    "product-detail": ProductDetail,
    "shipping-info": ShippingInfo
  },
  computed: {
    product(){
      return this.$store.getters.products[0]
    },
    userData(){
      return this.$store.getters.userData
    }
  }
}
</script>

<style scoped>
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
.container{
  width: 1188px;
  display: flex;
  margin: auto;
  background-color: white;
}
</style>
