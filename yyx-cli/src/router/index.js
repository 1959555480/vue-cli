import Vue from "vue";
import VueRouter from "vue-router";

//router 模块化
import home2 from './home'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('@vi/Home.vue'),
      meta: {
        auth: false, //是否需要登录
        keepAlive: true //是否需要缓存
      }
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
      meta: {
        auth: false, //是否需要登录
        keepAlive: false //是否需要缓存
      },
    },
    
    ...home2
  ]
});
router.beforeEach((to, from, next) => {
  let auth = to.meta.auth
  if (auth) { //需要登录
    next({
      path: '/login',
    })
  } else {
    next()
  }
})

export default router;
