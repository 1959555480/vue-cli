<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import { mapState,mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      name: state => state.login.name
    })
  },
  methods:{
    ...mapMutations('login',['setName']),
    ...mapActions('login',['getGlobalName'])
  },
  created() {
    console.log(this.$store.state.home.name, this.name);
    this.setName('yyx')
    this.getGlobalName()
  }
};
</script>>


<style lang="scss">
</style>
