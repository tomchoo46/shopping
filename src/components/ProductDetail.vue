<template>
  <div class="product">
    <h1 class="product-title">{{product.title}}</h1>
    <div class="rating">
        <span class="star">
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </span>
        <a href="#">{{product.rating}} Ratings</a>
        <span class="spacer"></span>
        <i class="fas fa-share-alt"></i>
        <i class="far fa-heart" style="marginLeft: 23px"></i>
    </div>
    <div class="brand bottom-border">
        <span class="grey-text">Brand: </span>
        <a>{{product.brands[0]}}</a>
        <span>&nbsp;|&nbsp;</span>
        <a>{{product.brands[1]}}</a>
    </div>
    <p class="price">RM{{product.price | decimal}}</p>
    <p class="previous-price font-14 bottom-border">
      <span style="textDecoration: line-through" class="grey-text font-14">
        RM{{product.originalPrice | decimal}}
      </span> 
      -{{product.discount}}%
    </p>
    <!-- color family -->
    <div class="flex-container">
      <div class="left-column font-14">Color Family</div>
      <div class="font-14">
        <p>{{product.colorFamily}}</p>
        <div class="selection-list">
          <span class="color-item" style="borderColor: #f57224"></span>
          <span class="color-item"></span>
          <span class="color-item"></span>
          <span class="color-item"></span>
        </div>
      </div>
    </div>
    <!-- size -->
    <div class="flex-container">
      <div class="left-column font-14">Size</div>
      <div class="font-14">
        <p>Int</p>
        <div class="selection-list">
          <div class="size-item" style="borderColor: #f57224">7-8 yrs</div>
          <div class="size-item">9-10 yrs</div>
          <div class="size-item">11-12 yrs</div>
          <div class="size-item">5-6 yrs</div>
          <div class="size-item">3-4 yrs</div>
        </div>
      </div>
    </div>
    <!-- qty -->
    <div class="flex-container">
      <div class="left-column font-14">Quantity</div>
      <div class="font-14">
        <button class="btn btn-change-qty"><i class="fas fa-minus"></i></button>
        <input class="order-qty" type="text" value="1" height="100%">
        <button class="btn btn-change-qty"><i class="fas fa-plus"></i></button>
      </div>
    </div>
    <div>
      <button class="btn btn-buy">Buy Now</button>
      <button class="btn btn-add-cart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: [],
  computed: {
    product(){
      return this.$store.getters.products[0]
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.product{
  width: 520px;
  box-sizing: border-box;
  padding: 0 20px;
}
.product-title{
  font-size: 22px;
  margin-top: 13px;
  margin-bottom: 11px;
  font-weight: normal;
}
.rating{
  display: flex;
  align-items: center;
  height: 29px;
}
.rating > i{
  font-size: 18px;
  cursor: pointer;
}
.rating > i:hover{
  color: #f57224;
}
.star{
  margin-right: 5px;
}
.star i{
  font-size: 10px;
}
.brand{
  line-height: 20px;
  padding-bottom: 15px;
}
.price{
  color: #f57224;
  font-size: 30px;
  padding-top: 16px;
}
.previous-price{
  padding-bottom: 17px;
}
.flex-container{
  display: flex;
  padding-top: 25px;
}
.left-column{
  width: 92px;
  color: #757575;
}
.selection-list{
  display: flex;
  margin-top: 8px;
}
.color-item{
  width: 32px;
  height: 32px;
  padding: 1px;
  border: 1px solid #eff0f5;
  margin-right: 12px;
  cursor: pointer;
  background-clip: content-box; /*define the extent of background*/
  background-color: grey;
  font-size: 10px;
  color: #fff;
}
.color-item:hover{
  border-color: #f57224;
}
.size-item{
  height: 32px;
  font-size: 12px;
  padding: 0 8px;
  margin-right: 8px;
  border: 1px solid #dadada;
  display: flex;
  align-items: center;
}
.size-item:hover{
  border-color: #f57224;
  cursor: pointer;
}
.btn{
  text-align: center;
  border: 0;
  cursor: pointer;
  transition: all .3s ease-out;  
  outline: 0;
}
.btn-buy{
  width: 225px;
  height: 44px;
  margin-right: 10px;
  margin-top: 8px;
  color: white;
  font-size: 16px;
  background-color: #ffb916;
}
.btn-buy:hover{
  background-color: #e59b11;
}
.btn-add-cart{
  width: 225px;
  height: 44px;
  margin-right: 10px;
  margin-top: 8px;
  color: white;
  font-size: 16px;
  background-color: #f57224;
}
.btn-add-cart:hover{
  background-color: #d0611e;
}
.btn-change-qty{
  width: 32px;
  height: 32px;
  font-size: 16px;
  background-color: #eff0f5;
}
.btn-change-qty .fas{
  color: #9e9e9e;
}
.btn-change-qty:hover{
  background-color: #dadada;
}
.btn-change-qty:hover .fas{
  color: #fff;
}
.btn-change-qty:focus{
  border: 0;
}
.order-qty{
  text-align: center;
  border: 0;
  width: 44px;
  margin: 0 1px;
}
</style>