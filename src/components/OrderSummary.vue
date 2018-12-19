<template>
  <div>
    <button>PLACE ORDER NOW</button>
    <p>Order Summary</p>
    <div>
      <div>
        <p>Subtotal (1 items)</p>
        <p>Shipping Fee</p>
      </div>
      <div>
        <p>Shipping Fee</p>
        <p>RM5.20</p>
      </div>
    </div>
    <p><input type="text"><button>APPLY</button></p>
    <p><span>Total</span><span>#totalPrice</span></p>
    <p>0% GST</p>
    <button>PLACE ORDER NOW</button>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: [],
  methods: {
  }
};
</script>

<style scoped>
</style>