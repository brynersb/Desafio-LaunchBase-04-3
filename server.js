const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const routes = require('./routes')


server.set('view engine', 'njk')



server.use(express.urlencoded({ extended: true })) // respoasvel por fazer funcionar o req.body
server.use(express.static('public'))
server.use(routes)


nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false

})



server.listen(5000, function () {
    console.log("server is running!!!")
})