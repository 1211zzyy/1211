<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="选择商铺:" class="selectShop" >
        <!-- <el-input v-model="formInline.user" placeholder="请选择餐厅"></el-input> -->
        <!-- <el-select v-model="formInline.region" placeholder="请选择餐厅" >
          <el-option :label="item" value="shanghai" v-for="(item, index) in content" :key="index"></el-option>
        </el-select> -->
          <el-select v-model="shopValue" placeholder="请选择" default-first-option :change="selectChange(shopValue)">
            <el-option
            v-for="(item,index) in content"
            :key="index"
            :label="item.label"
            :value="item.name"
            >
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择食品分类:" class="selectShopList" >
        <el-select v-model="foodValue" placeholder="请选择食品分类" :change="selectChange1(foodValue)">
          <!-- <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option> -->
            <el-option
                v-for="(item,index) in foodContent"
                :key="index"
                :label="item.label"
                :value="item.name"
                >
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择食品:">
        <el-select v-model="threeInner" placeholder="请选择食品">
            <el-option
                v-for="(item,index) in threeArr"
                :key="index"
                :label="item.label"
                :value="item.name"
                >
            </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div>
      <el-card class="box-card">
        <div class="boxOne">
          美食详情
        </div>
        <div v-show="isShowPic">
            <img style="width:100%;height:100%;" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
        </div>
        <div class="boxTwo">
          唯有美食不可辜负
        </div>
      </el-card>
      <el-card class="box-cardTwo">
        <div class="boxThree">
          用户评价
        </div>
        <div>
            <p v-for="(item,index) in allPrimary" :key="index">
                {{item.name}} X {{item.count}}
            </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {addGood,addGoodone,addGoodTwo,getPic} from '../../../api/index'
export default {
  name: "addGood",
  data() {
    return {
        isShowPic:false,
        latitude: this.$store.state.home.cityInfo.latitude, // 保存经纬度
        longitude: this.$store.state.home.cityInfo.longitude,
        shopValue:'',
        foodValue:'',
        threeInner:'',
        oneId:'',
        twoId:'',
        allPrimary:[],
        content:[],
        foodContent:[],
        threeArr:[],
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  watch: {
    oneId(newName, oldName) {
      this.getTwo(this.oneId)
    },
     twoId(newName, oldName) {
      this.getThree(this.twoId)
    },
     threeInner(newName, oldName) {
      this.getPicPort()
    }
  } ,
  mounted() {
    //   this.getShopCartList();
    // console.log(this.$store.state.home.cityInfo)
      this.getData()
  },
  methods: {
      getPicPort(){
          getPic().then(res =>{
            //   console.log(res)
              this.allPrimary = res
              this.isShowPic = true
          })
      },
    selectChange(val){
        var id = ''
        for (let i = 0; i < this.content.length; i++) {
            if(this.content[i].name === val){
                this.oneId = this.content[i].id
            }
        }
    },
    selectChange1(val){
        var id = ''
        for (let i = 0; i < this.foodContent.length; i++) {
            if(this.foodContent[i].name === val){
                this.twoId = this.foodContent[i].id
            }
        }
    },
    // 第一个option
    getData(){
        var obj = {}
        obj.latitude = this.latitude
        obj.longitude = this.longitude
        addGood(obj).then(res=>{
            this.content = res
            // if(res.length > 0){
            // }
        })
    },
    // 第二个option
    getTwo(id){
        var obj = {}
        obj.restaurant_id = id
        addGoodone(obj).then(res =>{
            this.foodContent = res
            console.log(res)
        })
    },
      // 第三个option
    getThree(id){
        addGoodTwo(id).then(res =>{
            this.threeArr = res.foods
            console.log(res)
        })
    },
    onSubmit() {
      console.log("submit!");
    },
    getShopCartList() {
        this.$router.dispatch("getShopCartList")
    }
  },
};
</script>

<style lang="less" scoped>
.demo-form-inline {
  padding-left: 80px;
  padding-top: 30px;
  font-size: 12px;
  .selectShop {
    margin-right: 80px;
  }
  .selectShopList {
    margin-right: 80px;
  }
}

.box-card {
  width: 380px;
  margin-left: 100px;
  float: left;
  .boxOne {
    height: 20px;
    border-bottom: 1px solid grey;
  }
  .boxTwo {
    padding-left: -15px;
  }
}
.box-cardTwo {
  width: 380px;
  margin-left: 100px;
  float:right;
  margin-right: 100px;
}
</style>

// v-for="(latitude, longitude) in getShopCartList"
