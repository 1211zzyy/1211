<template>
  <el-card>
    <el-table
      border
     :data="cityNameInfoList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="商家名称"
        width="250px">
      </el-table-column>
      <el-table-column
        prop="category"
        label="食品分类"
        >
      </el-table-column>
      <el-table-column
        prop="description"
        label="食品名称"
        width="width">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="食品描述"
        width="width">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作"
        width="width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="updateFood(row)">修改</el-button>
          <el-button type="danger" size="mini" @click="deleteFood($index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'FoodList',
  data(){
    return {
       cityId:1,
      cityName:'上海',
      cityNameInfoList:[],
      foodInfo:{}
      // shopNameList:[],
      // shopFoodList:[],
     
    }
  },
  mounted(){
    //全局事件总线获取search页的商家食品信息
    // this.$bus.$on('getShopFoodsInfo',this.getShopFoodsInfo)
    // this.getShopNameList()
    // this.$bus.$on('updateFoodList',this.updateFoodList)
    if(localStorage.getItem('foodList')){
      this.cityNameInfoList = JSON.parse(localStorage.getItem('foodList'))
    }
  },
  methods:{
   //获取商铺食品信息分类列表
  //  async getShopNameList(){
  //    try {
  //      const result = await this.$API.getShopNameList(this.cityId,this.cityName)
  //       this.cityNameInfoList = result
        // this.cityNameInfoList.shopName = '1'
        // console.log(result)
    //  } catch (error) {
    //    this.$message.error('请求商铺食品信息失败')
    //  }
    // },
  // getShopFoodsInfo({shopName,foodsInfo}){
  //   this.shopNameList = shopName
  //   this.shopFoodList = foodsInfo
  //   let nameArr = this.shopNameList.map(item=>item.name)
   
  // },
 updateFood(row){
  //  this.foodInfo = val
  //  console.log(this.foodInfo)
  // this.cityNameInfoList.push(this.foodInfo)
  //  console.log(this.cityNameInfoList)
  this.$router.push({
    path:'/food/addfood',
    query:{foodInfo:row}
  })


 },
  deleteFood(index){
    this.cityNameInfoList.splice(index,1)
    localStorage.setItem('foodList',JSON.stringify(this.cityNameInfoList))
  }
  
  }
}
</script>

<style lang="less" scoped>

</style>
