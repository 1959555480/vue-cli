<template>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <div @click="changeName">
      修改状态
    </div>-->
    <!-- <transition :name="transitionName">
      <keep-alive>
        <router-view class="router-view" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition> -->
    <!-- <transition :name="transitionName">
     
    </transition> -->
    <vue-route-transition id="app" :keepAlive="true">
     <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>
    </vue-route-transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      transitionName: "slide-right"
    };
  },

  computed: {
    ...mapState({
      name: state => state.login.name
    })
  },
  watch: {
    '$route'() {
      let isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      console.log(this.transitionName);
      this.$router.isBack = false;
    }
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


<style lang="less">
.router-view {
  position: absolute;
  left: 0;
  transition: all .5s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100% 0);
}
</style>
