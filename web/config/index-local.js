module.exports = {
  dev: {
    port: 8091,
    proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:8010',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/spider/api'
        }
      }
    }
  }
};