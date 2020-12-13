<template>
  <div>
    <el-card>
      <el-form ref="form"  label-width="150px" :inline="true">
        <el-form-item label="商家名称">
          <el-select v-model="shopId" placeholder="请选择" @change="getFoodList" :disabled='isShowShop'>
            <el-option :label="shopName.name" :value="shopName.id" v-for="(shopName,index) in shopNameList" :key="shopName.id" ></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="食品分类列表" >
          <el-select v-model="foodIndex" placeholder="请选择" @change="getFoodInfoList">
            <el-option :label="food.name" :value="index" v-for="(food,index) in foodList" :key="food.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="padding-left:70px">
      <el-button type="primary" icon="el-icon-plus" @click="addFoodInfo">添加食品</el-button>
      <el-table
        border
        :data="foodsInfoList"
        style="width: 100%;margin-top:20px">
        <el-table-column
          prop="name"
          label="食品名称"
          width="width">
        </el-table-column>
          <el-table-column
          prop="description"
          label="食品描述"
          width="width">
        </el-table-column>
          <el-table-column
          prop="tips"
          label="销量和评价"
          width="width">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'SearchFood',
  data(){
    return{
      shopId:'',
      foodIndex:'',
     
      longitude:"121.4762",
      latitude:"31.22967",
      shopNameList:[],
      foodList:[],
      foodsInfoList:[],
      isShowShop:false
    }
  },
  mounted(){
    this.getShopNameList()
    
  },
  methods:{
    //获取商家名称列表
   async getShopNameList(){
    //  console.log('111')
     try {
        const result = await this.$API.getShopNameList(this.cityId,this.cityName)
        // console.log(result)
          this.shopNameList = result

     } catch (error) {
       this.$message.error('请求商家名称失败')
     }
    },
    //获取食品列表
   async getFoodList(){

     try {
       const result = await this.$API.getFoodList(this.shopId)
      //  console.log(result)
       this.foodList = result
      //  let index=result.length
      //  for(let a=0;a<index-1;a++){
      //    this.foodsInfo.push(result[a]) 
      //  }
        //  console.log(this.foodsInfo);
        this.foodIndex=""
     } catch (error) {
        this.$message.error('请求食品分类失败')
     }
   },
   //获取食品详细信息列表
   getFoodInfoList(){
     this.foodsInfoList=this.foodList[this.foodIndex].foods
    //  this.foodsInfoList.forEach(item=>item.shopName='9')
    // console.log( this.foodsInfoList)
   
    // this.$bus.$emit('getShopFoodsInfo',{foodsInfo:this.foodsInfoList,shopName:this.shopNameList})
  
   },
   //跳转到添加食品详细信息页面
    addFoodInfo(){
      this.$router.push('/food/addfood')
      
    }
   
  },
  computed:{
   
  }
}
</script>

<style lang="less" scoped>

</style>
