const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 3000

app.prepare().then(() => {
    createServer(handle).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})