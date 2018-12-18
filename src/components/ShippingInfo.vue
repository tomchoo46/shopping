<template>
  <div class="shipping">
    <div class="shipping-container">
      <div class="flex-header">
        <span class="header-title vertical-center">Delivery Options</span>
        <span class="spacer"></span>
        <span><i class="fas fa-info-circle" style="cursor: pointer"></i></span>
      </div>
      <div class="flex-container">
        <span><i class="fas fa-map-marker-alt left-icon"></i></span>
        <span class="address font-14">Wp Kuala Lumpur,Kuala Lumpur,50450</span>
        <a>CHANGE</a>
      </div>
      <div class="flex-container bottom-border">
        <span><i class="fas fa-globe-asia left-icon"></i></span>
        <span class="font-14">Ships from Overseas</span>
      </div>
      <div class="flex-container">
        <span><i class="fas fa-truck left-icon"></i></span>
        <div>
          <p class="font-14">Economy Delivery</p>
          <p class="grey-text">7 - 24 days</p>
        </div>
        <span class="spacer"></span>
        <span class="font-14">RM5.20</span>
      </div>
      <div class="flex-container bottom-border">
        <span><i class="far fa-money-bill-alt left-icon"></i></span>
        <span class="font-14">Cash on Delivery not available</span>
      </div>
      <div class="flex-header">
        <span class="header-title">Return &amp; Warranty</span>
        <span class="spacer"></span>
        <span><i class="fas fa-info-circle" style="cursor: pointer"></i></span>
      </div>  
      <div class="flex-container">
        <span><i class="fas fa-undo-alt left-icon"></i></span>
        <div>
          <p class="font-14">7 days easy return</p>
          <p class="grey-text">Change of mind is not applicable</p>
        </div>
      </div>
      <div class="flex-container">
        <span><i class="fas fa-shield-alt left-icon"></i></span>
        <span class="font-14">Warranty not available</span>
      </div>
    </div>
    <div class="shipping-container">
      <div class="sold-by-header">
        <div>
          <p>Sold by</p>
          <p>MM88 Store</p>
        </div>
        <span>icon</span>
      </div>
      <div style="display: flex">
        <div class="info">
          <p>Positive Seller Ratings</p>
          <p>82%</p>
        </div>
        <div class="info">
          <p>Ship on Time</p>
          <p>83%</p>
        </div>
        <div class="info">
          <p>Chat Response Rate</p>
          <p>95%</p>
        </div>
      </div>
      <div class="store-link">
        <a href="#">GO TO STORE</a>
      </div>
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
.shipping{
  width: 330px;
}
.shipping-container{
  background-color: #fafafa;
}
.flex-header{
  display: flex;
  padding: 20px 16px 2px;
}
.flex-container{
  display: flex;
  padding: 10px 16px;
  align-items: center;
}
.sold-by-header{
  display: flex;
  margin-top: 8px;
  padding: 13px 16px 10px;
}
.info{
  padding: 8px 10px 8px 16px;
}
.store-link{
  display: flex;
  padding: 15px;
  justify-content: center;
  font-size: 13px;
}
.fas{
  font-size: 15px;
}
.left-icon{
  font-size: 18px;
  padding-right: 10px;
}
.address{
  padding-right: 15px;
}
</style>