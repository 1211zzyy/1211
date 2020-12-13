<template>
<div class="container">
    <router-view></router-view>
</div>
</template>
<script>
  import addGood from '@/pages/cart/components/addGood'
  import address from '@/pages/cart/components/address'
  import cartList from '@/pages/cart/components/cartList'
  export default {
    name: 'Cart',
    components: {
      addGood,
      address,
      cartList
    }
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
 .container{
   padding: 20px;
    //  height: 960px;
     width: 1200px;
     background-color: rgba(204, 204, 204,.5);
     position: absolute;
     top: 107px;
     left: 270px;
 }
</style>