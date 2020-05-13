<template>
  <div class="tao" v-if="showToast">{{msg}}</div>
</template>

<script>
export default {
  data(){
    return{
      mag: '',
      showToast: false
    }
  }
}
</script>

<style lang="less" scoped>
.tao{
  margin-top: 0;
}
</style>