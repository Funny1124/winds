<template>
  <div class="Carousel">
    <news-card :new-list="new_list"></news-card>
<!--    <span v-for="(item,index) in new_list" :key="index">-->
<!--      <InfoCard :data='{item,index}'></InfoCard>-->
<!--    </span>-->

<!--    <ul>-->
<!--      <li v-for="(item,index) in new_list" :key="index">-->
<!--        <InfoCard :data='item'></InfoCard>-->
<!--      </li>-->
<!--    </ul>-->

    <!--    <el-carousel :interval="3000" type="card" height="300px">-->
    <!--      <el-carousel-item v-for="(item,index) in new_list" :key="index">-->
    <!--        <el-card :body-style="{ padding: '8px' }">-->
    <!--          <img :src="item.image" alt="加载失败" class="image">-->
    <!--          <div style="padding: 14px;">-->
    <!--            <span>{{ item.real_num }}</span>-->
    <!--            <div class="bottom clearfix">-->
    <!--              <time class="time">{{ item.create_time }}</time>-->
    <!--              <el-button type="text" class="button" @click.native="new_detail(item.real_num)">查看详情</el-button>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </el-card>-->
    <!--      </el-carousel-item>-->
    <!--    </el-carousel>-->
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";

export default {
  name: "NewsView",
  data() {
    return {
      new_list: [
        {
          title: '2001',
          create_time: "2021-12-01",
          image: require('../assets/img/winds01.jpg'),
          description: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史",
        },
        {
          title: '2002',
          create_time: "2021-12-01",
          image: "https://img2.baidu.com/it/u=1277621845,2403285845&fm=253&fmt=auto&app=138&f=PNG?w=697&h=500",
          description: "从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来",
        },
        {
          title: '2003',
          create_time: "2021-12-01",
          image: "https://atts.w3cschool.cn/attachments/image/20210525/1621925534797542.png",
          description: "从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来",
        },
        {
          title: '2004',
          create_time: "2021-12-01",
          image: "https://img2.baidu.com/it/u=1277621845,2403285845&fm=253&fmt=auto&app=138&f=PNG?w=697&h=500",
          description: "从中华民族伟大复兴视角解读党的十九届六中全会",
        },
        {
          title: '2005',
          create_time: "2021-12-01",
          image: "https://atts.w3cschool.cn/attachments/image/20210525/1621925534797542.png",
          description: "从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来",
        },
        {
          title: '2006',
          create_time: "2021-12-01",
          image: "https://img2.baidu.com/it/u=1277621845,2403285845&fm=253&fmt=auto&app=138&f=PNG?w=697&h=500",
          description: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来",
        }]
    }
  },
  methods: {
    new_detail(p) {
      console.log(p)
    }
  },
  components: {
    NewsCard
  }
}
</script>

<style scoped>
.Carousel {
  /*width: 50%;*/
  margin: 0 auto;
  padding: 1% 10%;
  /*text-align: center;*/
}


</style>
