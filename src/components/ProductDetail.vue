<template>
  <div class="product">
    <h1 class="product-title">Kids Girls Chiffon Lace Princess Wedding Bridesmaid Pageant Party Formal Dresses</h1>
    <div class="rating">
        <span class="star">5 stars</span><a href="#">22 Ratings</a>
        <span class="spacer"></span>
        <i class="fas fa-share-alt"></i><i class="far fa-heart" style="marginLeft: 23px"></i>
    </div>
    <div class="brand">
        <span class="text">Brand: </span><a>OEM</a><span>&nbsp;|&nbsp;</span><a>Girls from OEM</a>
    </div>
    <p class="price">RM53.00</p>
    <p class="previous-price"><span style="textDecoration: line-through" class="text">RM88.40</span> -40%</p>
    <!-- color family -->
    <div class="flex-container">
      <div class="left-column">Color Family</div>
      <div class="right-column">
        <p>Blue</p>
        <div class="color-list">
          <span class="color-item" style="borderColor: #f57224"></span>
          <span class="color-item"></span>
          <span class="color-item"></span>
          <span class="color-item"></span>
        </div>
      </div>
    </div>
    <!-- size -->
    <div class="flex-container">
      <div class="left-column">Size</div>
      <div class="right-column">
        <div>Int</div>
        <div>years</div>
      </div>
    </div>
    <!-- qty -->
    <div class="flex-container">
      <div class="left-column">Quantity</div>
      <div class="right-column">qty</div>
    </div>
    <div>
      <button>Buy Now</button>
      <button>Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: [],
  methods: {
  }
};
</script>

<style>
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
.star{
  margin-right: 5px;
}
.fas, .far{
  color: #757575;
  font-size: 18px;
  cursor: pointer;
}
.fas:hover, .far:hover{
  color: #f57224;
}
.brand{
  line-height: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eff0f5;
}
.price{
  color: #f57224;
  font-size: 30px;
  padding-top: 16px;
}
.previous-price, .previous-price span{
  font-size: 14px;
}
.previous-price{
  padding-bottom: 17px;
  border-bottom: 1px solid #eff0f5;
}
.flex-container{
  display: flex;
  padding-top: 25px;
}
.left-column{
  width: 92px;
  color: #757575;
  font-size: 14px;
}
.right-column{
  font-size: 14px;
}
.color-list{
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
}
.color-item:hover{
  border-color: #f57224;
}
</style>