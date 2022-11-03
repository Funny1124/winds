<template>
  <div id="app">
    <div class="heart">
      <div class="top">
        <el-link href="https://archlinux.org/packages/" target="_blank"><i class="el-icon-menu"></i> Linux Software
        </el-link>
        <el-link class="space"></el-link>
        <el-link href="https://manjaro.org/hardware/" target="_blank"><i class="el-icon-cpu"></i> Hardware</el-link>
        <el-link class="space"></el-link>
        <el-link href="https://manjaro.myspreadshop.net/" target="_blank"><i class="el-icon-shopping-cart-1"></i> Merchandise
        </el-link>
        <el-link class="right-tab"></el-link>
      </div>
      <div>
        <el-menu
            :default-active="activeIndex" class="el-menu-demo"
            background-color="#26a69a"
            text-color="#b2dfdb"
            mode="horizontal" @select="handleSelect" active-text-color="white" style="padding-left: 6%">
          <el-submenu index="1">
            <template slot="title">Projects</template>
            <el-menu-item index="1-1">Blog</el-menu-item>
            <el-menu-item index="1-2">Mirrors</el-menu-item>
            <el-menu-item index="1-3">Update Status</el-menu-item>
            <el-menu-item index="1-4">Team</el-menu-item>
            <el-menu-item index="1-5">Donate</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">Explore</template>
            <el-menu-item index="2-1">SoftWare</el-menu-item>
            <el-menu-item index="2-2">Package</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">Learn</template>
            <el-menu-item index="3-1">Forum</el-menu-item>
            <el-menu-item index="3-2">Wiki</el-menu-item>
            <el-menu-item index="3-3">Docs</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">Supporters</template>
            <el-menu-item index="4-1">Sponsors</el-menu-item>
            <el-menu-item index="4-2">Partners</el-menu-item>
          </el-submenu>
        </el-menu>

      </div>
      <router-link to="/homePage"><img class="logo" src="@/assets/logo.png" alt=""></router-link>
      <router-link to="/downloadPage"><el-button type="success" round class="download"><i class="el-icon-download"></i>Download</el-button ></router-link>
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
  width: 6%;
  height: auto;
  padding: 4px;
  border-radius: 8px;
}
.download {
  position: absolute;
  right: 5%;
  top: 45px;
  /*width: 8%;*/
  height: 30px;
  padding: 4px;
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


.right-tab {
  width: 5%;
}

.space {
  width: 1%;
}
</style>
