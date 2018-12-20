<template>
  <div class="container">
    <div class="left-container">
      <delivery-info/>
      <order-detail :product="products[0]" :userData="userData"/>
    </div>
    <order-summary class="right-container" :product="products[0]" :userData="userData"/>
  </div>
</template>

<script>
import DeliveryInfo from './DeliveryInfo.vue'
import OrderDetail from './OrderDetail.vue'
import OrderSummary from './OrderSummary.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    "delivery-info": DeliveryInfo,
    "order-detail": OrderDetail,
    "order-summary": OrderSummary
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
