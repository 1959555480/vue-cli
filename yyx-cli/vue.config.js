module.exports = {
  chainWebpack: config => {
    // 设置目录别名alias .set 前面是自定义 后面是目录
    config.resolve.alias
      .set('@123', '@/assets')
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
    open: true, // 启动服务后是否打开浏览器
    // host: '127.0.0.1',
    // port: 8088, // 服务端口
    // https: false,
    // hotOnly: false,
    // 设置代理，用来解决本地开发跨域问题，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    // proxy: 'https://easy-mock.com/' // 设置代理
  }
}
