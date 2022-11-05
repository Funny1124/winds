<template>
  <div id="app">
    <nav-bar style="z-index: 3"></nav-bar>
    <div class="content" style="z-index: 1;padding-top: 110px">
      <router-view></router-view>
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
  background-image: url("@/assets/img/bg.jpg");
  /*background-size:20px;!* 任何长度单位都行*!*/
  background-size: cover;
  /*background-color: #1de9b6;*/
  /*margin-top: 60px;*/
}

.content {
  height: 1200px;
}
</style>
