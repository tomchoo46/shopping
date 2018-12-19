<template>
  <div class="delivery-container">
    <p class="header">Delivery Information</p>
    <div class="form-container">
      <div class="left-container">
        <p class="label">Full name</p>
        <input type="text" placeholder="First Last">
        <p class="label">Phone Number</p>
        <input type="text" placeholder="Please enter your phone number">
      </div>
      <div class="right-container">
        <p class="label">Address</p>
        <input type="text" placeholder="Please enter your address">
        <p class="label">State</p>
        <select name="" id="">
          <option value="">Please choose your province</option>
        </select>
        <p class="label">City</p>
        <select name="" id="">
          <option value="">Please choose your district</option>
        </select>
        <p class="label">Postcode</p>
        <select name="" id="">
          <option value="">Please choose your postcode</option>
        </select>
        <div class="btn-container">
          <button class="btn-save">SAVE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryInfo",
  props: [],
  methods: {
  }
};
</script>

<style scoped>
.delivery-container{
  background-color: white;
  margin-bottom: 12px;
}
.header{
  font-size: 18px;
  margin-bottom: 10px;
  padding: 25px 38px 15px 30px;  
}
.form-container{
  display: flex;
  padding: 38px;
  padding-top: 0;
}
.left-container{
  width: 49%;
  padding-right: 30px;
  box-sizing: border-box;
}
.right-container{
  width: 50%;
}
.label{
  margin-bottom: 5px;
  color: #424242;
}
input{
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  height: 40px;
  padding: 0 35px 0 10px;
  outline: none;  
  box-sizing: border-box;
  margin-bottom: 30px;  
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
select{
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  height: 38px;
  padding: 0 35px 0 10px;
  margin-bottom: 2px;
  outline: none;  
  box-sizing: border-box;
  margin-bottom: 30px;  
  color: #999;
}
.btn-container{
  display: flex;
  justify-content: flex-end;
}
.btn-save{
  margin-top: 30px;
  background-color: #1a9cb7;
  border: 0;
  color: #fff;
  font-size: 14px;
  width: 168px;
  height: 40px;
  outline: none;
  cursor: pointer;
}
.btn-save:hover{
  background-color: #16849b;
}
</style>