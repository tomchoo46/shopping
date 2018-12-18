<template>
  <div class="container">
    <div class="left-container">
      <delivery-info/>
      <order-detail/>
    </div>
    <order-summary class="right-container"/>
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
    }
  }
}
</script>

<style>
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
  background-color: white;
}
</style>
