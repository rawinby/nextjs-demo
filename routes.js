const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('post', '/p/:id')
routes.add('fetch_data', '/fetch-data')

