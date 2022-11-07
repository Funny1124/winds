<template>
  <div class="home">
    <!--    <img src="@/assets/img/winds01.jpg" alt=" 加载失败">-->
    <div v-for="(item, index) in infoList" :key="index">
      <info-card :info-data="{item,index}"></info-card>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard";

export default {
  name: "HomeView",
  data() {
    return {
      infoList: [
        {
          title: 'Simple and Easy to Use',
          desc: 'Every part of GNOME 43 has been designed to make it ' +
              'simple and easy to use. The Activities Overview is a simple way to access all your basic tasks.' +
              ' A press of a button is all it takes to view your open windows, launch applications, ' +
              'or check if you have new messages. Having everything in one convenient place means you ' +
              'don’t have to learn your way around a maze of different technologies.',
          image: 'https://www.gnome.org/wp-content/uploads/2021/03/overview.png'
        },
        {
          title: 'Intuitive and Efficient',
          desc: 'GNOME 43 provides a focused working environment that helps you get things done. ' +
              'It is packed with features that will make you more productive: ' +
              'a powerful search feature that helps you access all your work from one place; side-by-side windows that' +
              ' make it easy to view several documents at the same time; seamless integration with online accounts ' +
              'which allows you to access all your data in one place; ' +
              'and a messaging system that comfortably deals with notifications, ' +
              'letting you quickly respond in place or return to them in a convenient time.',
          image: 'https://www.gnome.org/wp-content/uploads/2021/03/folders-1536x864.png'
        },
        {
          title: 'Finely Crafted',
          desc: 'Every aspect of GNOME 43 has been crafted to fit together as a harmonious whole, ' +
              'providing a consistent and integrated experience. ' +
              'Our attention to detail means a smooth and polished product that' +
              ' lets you do the things you want without getting in the way. ' +
              'GNOME 43 is satisfying to use and beautiful to behold.',
          image: 'https://www.gnome.org/wp-content/uploads/2022/03/notifications-1024x576-1.jpg'
        }
      ],

    }
  },
  components: {
    InfoCard
  }
}
</script>

<style scoped>
.home {
  display: block;
  width: 60%;
  margin: 0 auto;
}
</style>
