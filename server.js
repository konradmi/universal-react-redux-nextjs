const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')
const MobileDetect = require('mobile-detect')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()

// const getDevice = (userAgent) => {
//   const md = new MobileDetect(userAgent)
//   if (md.phone()) return 'phone'
//   else if(md.tablet()) return 'tablet'
//   return 'desktop'
// }

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)
    const params = url => route(url)(pathname)
    
    // const device = getDevice(req.headers['user-agent'])

    if (params('/')) { app.render(req, res, '/Users', Object.assign(params('/'), query)) }
    else if (params('/Posts/:id')) { app.render(req, res, '/Posts', Object.assign(params('/Posts/:id'), query)) }
    else handle(req, res)
    // assigning `query` into the params means that we still
    // get the query string passed to our application
    // i.e. /blog/foo?show-comments=true
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})