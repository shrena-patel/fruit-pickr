const express = require('express')
const router = express.Router()
const data = require('./data.json')
// const fs = require('fs')

router.get('/fruits', (request, response) => {
    response.render('fruits/home', data)
})

router.get('/fruits/:id', (request, response) => {
    let id = request.params.id

    let found = data.fruits.find((element) => {
        return element.id == id
    })
    
    response.render('fruits/fruit', found)
})

router.get('/fruits/edit/:id', (request, response) => {
    let id = request.params.id

    let found = data.fruits.find((element) => {
        return element.id == id
    })
    
    response.render('fruits/edit', found)

})

router.post('/fruits/edit/:id', (request, response) => {
    let id = request.params.id

    let found = data.fruits.find((element) => {
        return element.id == id
    })

    found.name = request.body.name
    found.family = request.body.family
    found.fact = request.body.fact

    response.redirect('/fruits/edit' + id)
})



module.exports = router