<template>
  <div class="Carousel">
    <el-carousel :interval="3000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in new_list" :key="index">
        <el-card :body-style="{ padding: '8px' }">
          <img :src="item.image" alt="加载失败" class="image">
          <div style="padding: 14px;">
            <span>{{ item.real_num }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.create_time }}</time>
              <el-button type="text" class="button" @click.native="new_detail(item.real_num)">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "NewsView",
  data() {
    return {
      new_list: [
        {
          create_time: "2021-12-01",
          image: "https://atts.w3cschool.cn/attachments/image/20210525/1621925534797542.png",
          real_num: '2001',
          name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
        },
        {
          create_time: "2021-12-01",
          image: "https://img2.baidu.com/it/u=1277621845,2403285845&fm=253&fmt=auto&app=138&f=PNG?w=697&h=500",
          real_num: '2002',
          name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
        },
        {
          create_time: "2021-12-01",
          image: "https://atts.w3cschool.cn/attachments/image/20210525/1621925534797542.png",
          real_num: '2003',
          name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
        },
        {
          create_time: "2021-12-01",
          image: "https://img2.baidu.com/it/u=1277621845,2403285845&fm=253&fmt=auto&app=138&f=PNG?w=697&h=500",
          real_num: '2004',
          name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
        },
        {
          create_time: "2021-12-01",
          image: "https://atts.w3cschool.cn/attachments/image/20210525/1621925534797542.png",
          real_num: '2005',
          name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
        },
        {
          create_time: "2021-12-01",
          image: "https://img2.baidu.com/it/u=1277621845,2403285845&fm=253&fmt=auto&app=138&f=PNG?w=697&h=500",
          real_num: '2006',
          name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
        }]
    }
  },
  methods: {
    new_detail(p) {
      console.log(p)
    }
  }
}
</script>

<style scoped>
.Carousel {
  width: 60%;
  /*height: 20%;*/
  margin: 0 auto;
  text-align: center;
}

.time {
  text-align: center;
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
