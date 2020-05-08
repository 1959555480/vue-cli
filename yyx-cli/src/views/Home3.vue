<template>
  <div class="about" @click="goBack">
    <div>

    </div>
    <h1>home3home3home3</h1>
  </div>
</template>

<script>
export default {
  name: "home3",
  methods:{
    goBack(){
      this.$router.goBack()
    }
  }
};
</script>
<style lang="less" scoped>

</style>
