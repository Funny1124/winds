<template>

  <el-row gutter="20">
    <el-col :span="8" v-for="(item, index) in news" :key="index">
      <el-card class="info-card">
        <img :src="item.image" alt="加载失败" class="image">
        <h2>{{ item.title }}</h2>
        <p style="text-indent:2em">{{ item.description }}</p>
        <div class="bottom clearfix">
          <time class="time">{{ item.create_time }}</time>
          <el-button type="text" class="button">查看详情</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <!--  <el-card class="info-card" :body-style="{ padding: '0px' }">-->
  <!--    <el-row :gutter="20">-->
  <!--      <el-col :span="8" v-if="info.index%2===1">-->
  <!--        <img :src="info.item.image" alt="加载失败" class="image">-->
  <!--      </el-col>-->
  <!--      <el-col :span="4">-->
  <!--        <h2 style="text-align: center">{{ info.item.title }}</h2>-->
  <!--        <p style="text-indent:2em">{{ info.item.description }}</p>-->
  <!--        <time class="time">{{ info.item.create_time }}</time>-->
  <!--        <span class="bottom clearfix">-->
  <!--        <el-button type="text" class="button">查看详情</el-button>-->
  <!--        </span>-->
  <!--      </el-col>-->
  <!--      <el-col :span="8" v-if="info.index%2===0">-->
  <!--        <img :src="info.item.image" alt="加载失败" class="image">-->
  <!--      </el-col>-->
  <!--    </el-row>-->
  <!--  </el-card>-->

</template>

<script>
export default {
  name: "NewsCard",
  props: ['newList'],
  data() {
    return {
      news: this.newList
    }
  },
}
</script>

<style scoped>
.info-card {
  margin: 20px 30px;
  padding: 20px;
  height: 450px;
  background-color: rgba(249, 250, 252, 0.45);
  border: medium #e7a722;
  border-radius: 8px;
}

.image {
  width: 300px;
  height: 300px;
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
