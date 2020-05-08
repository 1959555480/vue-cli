const home2 = [
  {
    name: 'home2',
    path: '/home2',
    meta:{
      keepAlive: true
    },
    component: () => import('../views/Home2.vue')
  },
  {
    name: 'home3',
    path: '/home3',
    component: () => import('../views/Home3.vue')
  }
]
export default home2  //需要导出一个数组进行解构
