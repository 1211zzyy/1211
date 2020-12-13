<template>
  <el-card>
    <el-form ref="addFoodInfoForm" :model="addFoodInfoForm" label-width="150px" :rules="rules">
      <div class="one"> 
        <el-form-item label="添加食品" > </el-form-item>
      </div>

      <el-form-item label="商家名称" prop="name">
        <el-input v-model="addFoodInfoForm.name"></el-input>
      </el-form-item>

      <el-form-item label="食品分类" prop="category">
        <el-input v-model="addFoodInfoForm.category"></el-input>
      </el-form-item>

      <el-form-item label="食品名称" prop="description">
        <el-input v-model="addFoodInfoForm.description"></el-input>
      </el-form-item>

      <el-form-item label="食品描述" prop="phone">
        <el-input v-model="addFoodInfoForm.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addFoodInfoForm')">添加</el-button>
        <el-button @click="resetForm('addFoodInfoForm')">重置</el-button>
      </el-form-item>
    </el-form>
    
  </el-card>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "AddFood",
  data(){
    return {
      //要收集的食品列表
      addFoodInfoForm:{
        name:'',
        category:'',
        description:'',
         phone:''
      },
      //表单验证
      rules:{
        name: [
            { required: true, message: '请输入商家名称', trigger: 'blur' },
          ],
         category: [
            { required: true, message: '请输入食品分类', trigger: 'blur' },           
          ],
         description: [
            { required: true, message: '请输入食品名称', trigger: 'blur' },         
          ],
          phone: [
            { required: true, message: '请输入食品描述', trigger: 'blur' },          
          ],  
     },
     //食品列表
     foodList:[]
    }
     
  },
  mounted(){
    //获取ship列表
      if(localStorage.getItem('foodList')){
  this.foodList = JSON.parse(localStorage.getItem('foodList'))
//判断如果是从路由跳转过来的表示修改
  if(this.$route.query.foodInfo){
    this.addFoodInfoForm = this.$route.query.foodInfo
  }
}
  },
  methods:{
   // 表单验证
     submitForm(addFoodInfoForm) {
        this.$refs[addFoodInfoForm].validate((valid) => {
          if (valid) {
            // this.$bus.$emit('updateFoodList',this.addFoodInfoForm)
           //如果验证没有问题 如果是从路由跳转过来判断是修改还是添加
            if(this.$route.query.foodInfo){
              let index = this.foodList.findIndex(item=>item.id === this.addFoodInfoForm.id)
              this.foodList.splice(index,1,this.addFoodInfoForm)
              localStorage.setItem('foodList',JSON.stringify(this.foodList))
               this.$router.push('/food/foodlist')
            }else{
              //如果不是修改过来的，就需要生成id添加到原有数组中
              this.addFoodInfoForm.id =nanoid()
              this.foodList.push(this.addFoodInfoForm)
              localStorage.setItem('foodList',JSON.stringify(this.foodList))
               this.$router.push('/food/foodlist')
            }

          } else {
            return false;
          }
        });
      },
      //重置表单
      resetForm(addFoodInfoForm) {
        this.$refs[addFoodInfoForm].resetFields();
      }
    }
  }


</script>

<style lang="less" scoped>
.one {
  /deep/ .el-form-item__label {
    font-size: 20px;
    font-weight: 700;
    // width:300px;
  }
}
</style>
