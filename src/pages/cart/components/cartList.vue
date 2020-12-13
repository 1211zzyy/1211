<template>
  <div>
    <h2>已选食品</h2>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="商家名" width="180">
      </el-table-column>
      <el-table-column prop="name" label="食品类别" width="190">
      </el-table-column>
      <el-table-column prop="province" label="食品名" width="490">
      </el-table-column>
      <el-table-column prop="city" label="销量" width="190"> </el-table-column>
      <!-- <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="twoBlock">
      <h2>已选择地址</h2>
      <el-button
        type="success"
        icon="el-icon-circle-plus-outline"
        class="successIcon"
        @click="toAddGoods"
        >新增地址</el-button
      >
    </div>
    <!-- <el-button type="text" size="small">新增地址</el-button> -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="地址名" width="150">
      </el-table-column>
      <el-table-column prop="name" label="城市" width="120"> </el-table-column>
      <el-table-column prop="province" label="收货人" width="120">
      </el-table-column>
      <el-table-column prop="city" label="手机号" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址类型" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="详细地址" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    toAddGoods() {
        this.$router.push("address")
    },
  },
};
</script>

<style lang="less" scoped>
.twoBlock {
  display: inline-block;
  height: 56px;
  .successIcon {
    float: right;
    margin-left: 1000px;
    margin-top: 20px;
    position:absolute;
  }
  h2 {
    // height: 30px;
    line-height: 60px;
    float: left;
  }
}
</style>
