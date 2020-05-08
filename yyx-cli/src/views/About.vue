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
    go(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="less" scoped>
.about{
  background-color: skyblue;
}
</style>
