module.exports = {
  devServer: {
    allowedHosts: "all"
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Bus Mayasari Bakti'
      return args
    })
  }
}
