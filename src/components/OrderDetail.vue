<template>
  <div>
    <div class="header-container label">
      <div class="first-column">{{userData.orderQty}} ITEMS</div>
      <div class="second-column">PRICE</div>
      <div class="third-column">QUANTITY</div>
    </div>
    <div class="store-container">
      <span class="label">Fulfilled by</span>
      <span class="store">{{product.store}}</span>
    </div>
    <div class="order-container">
      <div class="delivery-container">
        <p style="padding: 12px 0 8px 0;">Delivery Option</p>
        <div class="deliver-detail">
          <span style="margin: 0 8px"><i class="fas fa-check"></i></span>
          <div>
            <p><span><i class="fas fa-truck left-icon"></i></span><span class="font-14">&nbsp; Economy</span></p>
            <p class="label font-14">Get By 26 Dec-10 Jan 2019</p>
            <p class="font-14">RM{{product.shippingFee | decimal}}</p>
          </div>
        </div>
      </div>
      <div class="order-detail">
        <div class="first-column">
          <div class="image">
            <img :src="product.imageUrl" alt="product">
          </div>
          <div class="product-detail">
            <p class="font-14">{{product.title}}</p>
            <p style="marginTop: 8px;" class="label">
              <span>{{product.brands[0]}}</span>
              <span>, Size:Int:</span>
              <span>{{userData.selectedSize}}</span>
              <span>, Color Family:</span>
              <span>{{userData.selectedColor}}</span>
            </p>
          </div>
        </div>
        <div class="second-column">
          <p class="price">RM{{product.price | decimal}}</p>
          <p class="original-price font-14">RM{{product.originalPrice | decimal}}</p>
          <p class="font-14">-{{product.discount}}%</p>
        </div>
        <div class="third-column">
          <span class="label font-14">Qty: </span>
          <span class="order-quantity">{{userData.orderQty}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetail",
  props: ['product', 'userData'],
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
.deliver-detail > span > i{
  color: #f57224;
}
.order-detail{
  display: flex;
  padding-top: 22px;
  padding-bottom: 16px;
}
.order-detail .first-column{
  display: flex;
}
.image{
  width: 80px;
  height: 80px; 
  margin: 0 12px 0 10px;
  display: flex;
  align-items: center;
}
.image img{
  max-width: 100%;
}
.product-detail{
  width: 364px;
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
.order-quantity{
  font-size: 16px;
  padding-right: 22px;
}
</style>