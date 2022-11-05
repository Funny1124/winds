<template>
  <div class="home">
    <!--    <img src="@/assets/img/winds01.jpg" alt=" 加载失败">-->
    <div class="demo-image__preview">
      <el-image
          class="image"
          :src="url"
          :preview-src-list="srcList">
      </el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  }
}
</script>

<style scoped>
.home {
}

.image {
  display: block;
  margin: 0 auto;
  width: 50%;
}
</style>
