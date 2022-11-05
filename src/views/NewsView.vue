<template>
<div>
  <ul>
    <li v-for="(item,index) in new_list" :key="index" :class="item">
      {{index}} {{ item }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "NewsView",
  data() {
    return {
      new_list: [{
        create_time: "2021-12-01",
        image: "../../static/logo.png",
        real_num: '2004',
        name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
      }, {
        create_time: "2021-12-01",
        image: "",
        real_num: '2004',
        name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
      }, {
        create_time: "2021-12-01",
        image: "../../static/logo.png",
        real_num: '2004',
        name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
      }],

    }
  }
}
</script>

<style scoped>
</style>
