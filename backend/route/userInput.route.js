const express = require('express')
const userInput = require('../controllers/userInput.controller')

module.exports = app =>{
    router = express.Router()
    router.post('/',userInput.importUserInput)


    app.use('/api/userInput',router)
}

