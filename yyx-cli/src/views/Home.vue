<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img src="@123/down.jpg" alt />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import api from "@/api"

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created(){
    console.log("登录")
    api.getA()
  }
};
</script>
