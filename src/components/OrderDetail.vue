<template>
  <div>
    <div class="header-container label">
      <div class="first-column">#5 ITEMS</div>
      <div class="second-column">PRICE</div>
      <div class="third-column">QUANTITY</div>
    </div>
    <div class="store-container">
      <span class="label">Fulfilled by</span>
      <span class="store">#MM88 Store</span>
    </div>
    <div class="order-container">
      <div class="delivery-container">
        <p style="padding: 12px 0 8px 0;">Delivery Option</p>
        <div class="deliver-detail">
          <span style="margin: 0 8px">Icon</span>
          <div>
            <p><span>Icon</span><span>Economy</span></p>
            <p class="label">Get By 26 Dec-10 Jan 2019</p>
            <p>RM7.05</p>
          </div>
        </div>
      </div>
      <div class="order-detail">
        <div class="first-column">
          <img src="" alt="product">
          <div>
            <p class="font-14">#title</p>
            <p style="marginTop: 8px;" class="label">
              <span>#brand</span>
              <span>, Size:Int</span>
              <span>#size</span>
              <span>, Color Family:</span>
              <span>#color</span>
            </p>
          </div>
        </div>
        <div class="second-column">
          <p class="price">#price</p>
          <p class="original-price font-14">#originalPrice</p>
          <p class="font-14">#discount</p>
        </div>
        <div class="third-column">
          <span class="label font-14">Qty: </span>
          <span style="fontSize: 16px">#Qty</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetail",
  props: [],
  methods: {
  }
};
</script>

<style scoped>
.header-container{
  background-color: #fafafa;
  display: flex;
  height: 40px;
  align-items: center;
  margin-bottom: 12px;
}
.first-column{
  width: 477px;
  padding-left: 12px;
}
.second-column{
  width: 177px;
}
.third-column{
  box-sizing: border-box;
  width: 122px;
  padding-right: 12px;
  text-align: right;
}
.label{
  color: #757575;
}
.store-container{
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #fafafa;
  padding: 0 12px;
}
.store{
  margin-left: 12px;
}
.order-container{
  background-color: white;
}
.delivery-container{
  padding: 0 12px;
}
.deliver-detail{
  border: 1px solid #f57224;
  width: 254.667px;
  display: flex;
  align-items: center;
  height: 78px;
}
.order-detail{
  display: flex;
}
.order-detail .first-column{
  display: flex;
}
.order-detail .first-column img{
  margin: 0 12px 0 10px;
}
.price{
  color: #f57224;
  font-size: 18px;
  margin-bottom: 4px;  
}
.original-price{
  color: #757575;
  margin-bottom: 8px;
  text-decoration: line-through;
}
</style>