<template>
  <router-layout>
    <header slot="header">1</header>
    <div>
      <!-- <m-header>13213</m-header> -->
    </div>
    <footer slot="footer">2</footer>
  </router-layout>
</template>

<script>
// import mHeader from '@/components/header'
export default {
  name: "home2",
  components:{
    // mHeader
  },
  created(){
    console.log("home2页面created")
  }
};
</script>
<style lang="less" scoped>

</style>
