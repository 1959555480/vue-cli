<template>
  <div class="tao" v-if="showToast">{{msg}}</div>
</template>

<script>
export default {
  data(){
    return{
      msg: '',
      showToast: true
    }
  }
}
</script>

<style lang="less" scoped>
.tao{
  margin-top: 0;
  position: fixed;
  left: 0;
  top: 50%;
}
</style>