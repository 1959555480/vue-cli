<template>
  <router-layout>
    <div class="home">
      <!-- <img alt="Vue logo" src="@123/logo.png" /> -->
      <div id="nav">
        <router-link to="/about">About</router-link>
        <div @click="clickShow">点击显示loading</div>
      </div>
      <!-- <div class="home_color">
        <div class="box">
          <div @click="to">22222</div>
        </div>
      </div>-->
    </div>
    <!-- <loading :visible="visible" text="加载中"></loading> -->
  </router-layout>
</template>

<script>
// import loading from '@cp/Loading/Loading.vue'
import Loading from "@cp/Loading";
export default {
  // components:{
  //   loading
  // },
  name: "Home",
  data() {
    return {
      visible: true
    };
  },
  methods: {
    to() {
      this.$router.push({
        name: "About"
      });
    },
    clickShow() {
      this.visible = !this.visible;
    }
  },
  created() {},
  mounted() {
    const loading = Loading({ text: "正在加载。。。" });
    // 三秒钟后关闭
    setTimeout(() => {
      loading.close();
    }, 3000);
    console.log("没有缓存，加载home");
  }
};
</script>
<style lang="less" scoped>
.home {
  // height: 10000px;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
  opacity: .1;
}
</style>
