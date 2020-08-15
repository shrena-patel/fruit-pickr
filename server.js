const express = require('express')
const hbs = require('express-handlebars')

const server = express()

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')

server.get('/', (request, response) => {
    response.render('home', {})
})


module.exports = server