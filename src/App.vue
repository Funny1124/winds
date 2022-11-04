<template>
  <div id="app">
    <nav-bar style="z-index: 3"></nav-bar>
    <div class="content" style="z-index: 1;padding-top: 110px">
      <router-view ></router-view>
    </div>
    <bottom-nav-bar style="z-index: 2"></bottom-nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import BottomNavBar from "@/components/BottomNavBar";

export default {
  name: 'App',

  components: {
    NavBar,
    BottomNavBar
  }
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

.el-row {
  margin-bottom: 20px;

}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
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

.contact {
  position: absolute;
  left: 95%;
  margin-top: 40%;
  width: 4%;
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
  height: 1200px;
}

.footer {
  background-color: #26a69a;
  width: 100%;
}

.right-tab {
  width: 5%;
}

.space {
  width: 1%;
}
</style>
