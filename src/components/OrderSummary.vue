<template>
  <div>
    <div class="summary-container">
      <div class="btn-top">
        <button class="btn">PLACE ORDER NOW</button>
      </div>
      <p class="title">Order Summary</p>
      <div class="subtotal">
        <div class="left-column">
          <p>Subtotal ({{userData.orderQty}} items)</p>
          <p>Shipping Fee</p>
        </div>
        <span class="spacer"></span>
        <div class="right-column">
          <p>RM{{subtotal | decimal}}</p>
          <p>RM{{product.shippingFee}}</p>
        </div>
      </div>
      <p>
        <input type="text" placeholder="Enter Voucher Code"/>
        <button class="btn-apply">APPLY</button>
      </p>
      <div class="total-container">
        <span class="font-14">Total</span>
        <span class="spacer"></span>
        <span class="total-price">RM{{total | decimal}}</span>
      </div>
      <p style="textAlign: right;">0% GST</p>
      <div class="btn-btm">
        <button class="btn">PLACE ORDER NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: ['product', 'userData'],
  methods: {
  },
  computed:{
    subtotal(){
      return this.product.price * this.userData.orderQty
    },
    total(){
      return this.subtotal + this.product.shippingFee
    }
  }
};
</script>

<style scoped>
.summary-container{
  background-color: white;
  padding: 0 12px;
}
.btn-top{
  padding: 12px 0 16px 0;
}
.btn{
  width: 100%;
  height: 40px;
  background-color: #dadada;
  border: none;
  color: white;
  cursor: not-allowed;
  outline: none;
}
.title{
  font-size: 18px;
  margin-bottom: 14px;
}
.subtotal{
  display: flex;
}
.left-column p, .right-column p{
  margin-bottom: 15px;
  font-size: 14px;
}
.right-column p{
  text-align: right;
  font-size: 16px;
  letter-spacing: -.44px;
}
.left-column p{
  color: #757575;
}
input{
  width: 250px;
  border: 1px solid #ddd;
  font-size: 14px;
  height: 40px;
  padding: 0 35px 0 10px;
  outline: none;  
  box-sizing: border-box;
  margin-bottom: 10px;  
  margin-right: 8px;
}
input::-webkit-input-placeholder {
color: #999 !important;
}
input:-moz-placeholder { /* Firefox 18- */
color: #999 !important;  
}
input::-moz-placeholder {  /* Firefox 19+ */
color: #999 !important;  
}
input:-ms-input-placeholder {  
color: #999 !important;  
}
.btn-apply{
  background-color: #1a9cb7;
  border: 0;
  color: #fff;
  font-size: 14px;
  width: 104px;
  height: 40px;
  outline: none;
  cursor: pointer;
}
.btn-apply:hover{
  background-color: #16849b;
}
.total-container{
  display: flex;
}
.total-price{
  font-size: 18px;
  color: #f57224;
  margin-bottom: 5px;
}
.btn-btm{
  padding: 16px 0 16px 0;
}
</style>