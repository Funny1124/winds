<template>
  <div id="app">
    <div class="heart">
      <div class="top">
        <el-link href="https://archlinux.org/packages/" target="_blank"><i class="el-icon-menu"></i> Linux Software
        </el-link>
        <el-link class="space"></el-link>
        <el-link href="https://element.eleme.io" target="_blank"><i class="el-icon-cpu"></i> Hardware</el-link>
        <el-link class="space"></el-link>
        <el-link href="https://element.eleme.io" target="_blank"><i class="el-icon-shopping-cart-1"></i> Merchandise
        </el-link>
        <el-link class="right-tab"></el-link>
      </div>
      <div>
        <el-menu
            :default-active="activeIndex" class="el-menu-demo"
            background-color="#26a69a"
            text-color="#b2dfdb"
            mode="horizontal" @select="handleSelect" active-text-color="white">
          <!-- 占位 -->
          <el-menu-item index="0" class="tab">
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">Projects</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">Explore</el-menu-item>
          <el-menu-item index="3"><router-link to="/downloadPage" style="text-decoration: none">Download</router-link></el-menu-item>
        </el-menu>
      </div>
      <router-link to="/homepage"><img class="logo" src="@/assets/logo.png" alt=""></router-link>
    </div>

    <div class="content">
      <router-view style="padding-top: 100px"> </router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activeIndex: '-1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  background-color: #1de9b6;
  /*margin-top: 60px;*/
}

.logo {
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: 80%;
  padding: 8px;
  border-radius: 8px;
}
.heart {
  position: fixed;
  top: 0;
  left: 8px;
  right: 8px;
  /*width: 100%;*/
  height: auto;
  background-color: #26a69a;
}

.top {
  background-color: #1de9b6;
  height: 30px;
  line-height: 30px;
  text-align: right;
}

.content {
  height: 1000px;
}

.tab {
  width: 15%;
}

.right-tab {
  width: 5%;
}

.space {
  width: 1%;
}
</style>
