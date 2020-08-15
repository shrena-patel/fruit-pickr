const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')



router.get('/', (request, response) => {
    response.render('fruits/home', data)
})

router.get('/:id', (request, response) => {
    let id = request.params.id

    let found = data.fruits.find((element) => {
        return element.id == id
    })
    
    response.render('fruits/fruit', data)
})

module.exports = router