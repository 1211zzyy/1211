<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="地址名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="*收货姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="*收货手机">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="*所在城市">
        <el-select v-model="form.region" placeholder="请选择收货城市">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="*详细地址">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item> -->
      <!-- <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item> -->
      <el-form-item label="地址类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="公司" name="type"></el-checkbox>
          <el-checkbox label="家庭" name="type"></el-checkbox>
          <el-checkbox label="学校" name="type"></el-checkbox>
          <el-checkbox label="其它" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地址备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped></style>
