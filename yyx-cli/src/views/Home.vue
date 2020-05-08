<template>
  <router-layout>
  <div class="home">
    <!-- <img alt="Vue logo" src="@123/logo.png" /> -->
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
    <div class="home_color">
      <div class="box">
        <div @click="to">22222</div>
      </div>
    </div>
  </div>
  </router-layout>
</template>

<script>
export default {
  name: "Home",
  methods:{
    to(){
      this.$router.push({
        name:'About'
      })
    }
  },
  created(){
    console.log("没有缓存，加载home")
  }
};
</script>
<style lang="less" scoped>
.box{
  height: 10000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
