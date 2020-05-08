<template>
    <vue-route-transition id="app" :keepAlive="true">
     <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>
    </vue-route-transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },

  computed: {
    ...mapState({
      name: state => state.login.name
    })
  },
  methods: {
    ...mapMutations("login", ["setName"]),
    ...mapActions("login", ["getGlobalName"]),
    changeName() {
      this.setName("烟花笑");
    }
  },
  created() {
    console.log(this.$store.state.home.name, this.name);
    this.setName("yyx");
    this.getGlobalName();
  }
};
</script>
<style>
*{margin: 0;padding: 0;}
</style>
