<template>
  <router-layout>
    <m-header>about</m-header>
  </router-layout>
</template>

<script>
import mHeader from '@/components/header'
export default {
  name: "about",
  components:{
    mHeader
  },
  methods:{
  },
  created(){
    console.log("没有缓存，加载about")
  }
};
</script>
<style lang="less" scoped>
</style>
