module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/lucky-draw' : '/',


  devServer: {
    proxy: {
      '/api': {
        target: `http://192.168.1.150:1234`, // 这个链接是要代理到的api地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },

};
