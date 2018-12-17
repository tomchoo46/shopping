<template>
  <div class="shipping">
    <div class="flex-header">
      <span>Delivery Options</span>
      <span class="spacer"></span>
      <span>Icon</span>
    </div>
    <div class="flex-container"><span>icon</span><span>Wp Kuala Lumpur,Kuala Lumpur,50450</span><span>CHANGE</span></div>
    <div class="flex-container"><span>icon</span><span>Ships from Overseas</span></div>
    <hr>
    <div class="flex-container">
      <span>icon</span>
      <div>
        <p>Economy Delivery</p>
        <p>7 - 24 days</p>
      </div>
      <span>RM5.20</span>
    </div>
    <div class="flex-container"><span>icon</span><span>Cash on Delivery not available</span></div>
    <hr>
    <div class="flex-header"><span>Return &amp; Warranty</span><span>Icon</span></div>  
    <div class="flex-container">
      <span>icon</span>
      <div>
        <p>7 days easy return</p>
        <p>Change of mind is not applicable</p>
      </div>
    </div>
    <div class="flex-container"><span>icon</span><span>Warranty not available</span></div>
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
.flex-header{
  display: flex;
  padding: 20px 16px 2px;
}
.flex-container{
  display: flex;
  padding: 10px 16px;
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
</style>