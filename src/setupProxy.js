const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/d1d7e640606f48e8972d866b53297e66/query',
    createProxyMiddleware({
      target: 'https://api.notion.com/v1/databases',
      changeOrigin: true,
    }),
  )
  app.use(
    '/users',
    createProxyMiddleware({
      target: 'https://jsonplaceholder.typicode.com',
      changeOrigin: true,
    }),
  )
}
