/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 各种移动端的适配
import 'amfe-flexible/index.js';

// 前进后退动画插件
import RouteTransition from 'vue-route-transition'
Vue.use(RouteTransition)

import toast from './components/Toast'
Vue.prototype.$toast = toast

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
