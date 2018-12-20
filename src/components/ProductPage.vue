<template>
  <div class="container">
    <div class="image">
      <img :src="products[0].imageUrl" alt="Product">
    </div>
    <product-detail :product="products[0]" :userData="userData" />
    <shipping-info :store="products[0].store"/>
  </div>
</template>

<script>
import ProductDetail from './ProductDetail.vue'
import ShippingInfo from './ShippingInfo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    "product-detail": ProductDetail,
    "shipping-info": ShippingInfo
  },
  computed: {
    ...mapGetters([
      'products',
      'userData'
    ])
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
