<template>
  <div class="product">
    <h1 class="product-title">Kids Girls Chiffon Lace Princess Wedding Bridesmaid Pageant Party Formal Dresses</h1>
    <div class="rating">
        <span class="star">5 stars</span><a href="#">22 Ratings</a>
        <span class="spacer"></span>
        <i class="fas fa-share-alt"></i><i class="far fa-heart" style="marginLeft: 23px"></i>
    </div>
    <div>
        <span>Brand: </span><span> OEM | More Girls from OEM</span>
    </div>        
    <hr>
    <p>RM53.00</p>
    <p>RM88.40 -40%</p>
    <hr>
    <!-- color family -->
    <div>
      <div>Color Family</div>
      <div>
        <div>Blue</div>
        <div>colors</div>
      </div>
    </div>
    <!-- size -->
    <div>
      <div>Size</div>
      <div>
        <div>Int</div>
        <div>years</div>
      </div>
    </div>
    <!-- qty -->
    <div>
      <div>Quantity</div>
      <div>qty</div>
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
}
</style>