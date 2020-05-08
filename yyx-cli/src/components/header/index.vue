<template>
    <header>
      <div @click="back" class="pic">
        <img src="@/assets/back.png" alt />
      </div>
      <div class="title">
        <span>
          <slot></slot>
        </span>
      </div>
      <div :class="[showRight?'right':'']">右边</div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      showRight: true
    };
  },
  methods: {
    back() {
      this.$router.goBack();
    }
  }
};
</script>

<style lang="less" scoped>
@width: 20px;
header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: @width;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  .pic {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    img {
      display: block;
      width: 100%;
    }
  }
  .title {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
  }
  .right {
    visibility: hidden;
    width: 50px;
  }
}
</style>