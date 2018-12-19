<template>
  <div class="container">
    <div class="left-container">
      <delivery-info/>
      <order-detail :product="product" :userData="userData"/>
    </div>
    <order-summary class="right-container" :product="product" :userData="userData"/>
  </div>
</template>

<script>
import DeliveryInfo from './DeliveryInfo.vue'
import OrderDetail from './OrderDetail.vue'
import OrderSummary from './OrderSummary.vue'

export default {
  name: 'app',
  components: {
    "delivery-info": DeliveryInfo,
    "order-detail": OrderDetail,
    "order-summary": OrderSummary
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
.container{
  width: 1188px;
  display: flex;
  margin: auto;
}
.left-container{
  width: 788px;
}
.right-container{
  width: 388px;
  margin-left: 12px;
}
</style>
