module.exports = {
  chainWebpack: config => {
    // 设置目录别名alias .set 前面是自定义 后面是目录
    config.resolve.alias
      .set('@123', '@/assets')
      .set('@cp', '@/components')
      .set('@vi', '@/views')
  },
  css: {
    // css预设配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            //换算基数
            rootValue: 75,
            // 以yyx-开头的不会转换(用于其他UI框架的使用)
            selectorBlackList: ['yyx-'],
            // 匹配所有px
            propList: ['*'],
          })
        ]
      }
    }
  },
  devServer: {
    // open: true,    //是否自动打开浏览器
    port: 8080,      //启动端口号
    // https: false,    //是否开启https
    // hotOnly: false,
    // proxy: {
    //   // 配置跨域
    //   '/api': {
    //     target: 'http://www.gos.global/app',
    //     ws: true,
    //     changOrigin: true,    //是否开启代理
    //     pathRewrite: {  //api开头的请求会去到target下请求
    //       '^/api': ''   //以/api开头的请求替换为空
    //     }
    //   }
    // },
  },
}
