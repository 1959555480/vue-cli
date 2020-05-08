<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@123/logo.png" /> -->
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
    <input type="text" name="" id="">
    <div class="home_color">
      <div class="box">
        Home
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  created(){
    console.log("没有缓存，加载home")
  }
};
</script>
<style lang="less" scoped>
@height: 12000px;
.home{
  height: 100%;
  overflow-y: scroll;
  &_color{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 10000px;
    .box{
      width: 100px;
      height: 100px;
    }
  }
}
</style>
