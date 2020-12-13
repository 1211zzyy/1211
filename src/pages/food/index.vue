<template>
  <div class="container">
   <keep-alive>
    <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'Food',
   data() {
      return {

      }
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .container{
        width: 1200px;
        height: 660px;
        position: absolute;
        left:270px;
        top:107px
      }
  
</style>
