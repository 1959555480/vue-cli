<template>
  <router-layout>
    <m-header>home2</m-header>
  </router-layout>
</template>

<script>
import mHeader from '@/components/header'
export default {
  name: "home2",
  components:{
    mHeader
  },
  created(){
    console.log("home2页面created")
  }
};
</script>
<style lang="less" scoped>

</style>
