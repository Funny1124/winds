<template>
    <el-card class="info-card" :body-style="{ padding: '0px' }">
      <el-row :gutter="20">
        <el-col :span="16" v-if="info.index%2===1">
          <img :src="info.item.image" alt="加载失败" class="image">
        </el-col>
        <el-col :span="8">
          <h2 style="text-align: center">{{ info.item.title }}</h2>
          <p style="text-indent:2em">{{ info.item.desc }}</p>
        </el-col>
        <el-col :span="16" v-if="info.index%2===0">
          <img :src="info.item.image" alt="加载失败" class="image">
        </el-col>
      </el-row>
    </el-card>
</template>

<script>
export default {
  name: "InfoCard",
  props:['infoData'],
  data(){
    return{
      info:this.infoData
    }
  }
}
</script>

<style scoped>
.info-card {
  display: block;
  margin: 20px 30px;
  padding: 20px;
  background-color: rgba(249, 250, 252, 0.45);
  border: medium #e7a722;
  border-radius: 8px;
}

.image {
  object-fit: cover;
  border: medium #e7a722;
  border-radius: 8px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  line-height: 13px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

</style>
