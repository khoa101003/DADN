const express = require('express')
const userController = require('../controllers/user.controller')

module.exports = app =>{
    router = express.Router()
    router.get('/', userController.getUsers)
    app.use('/api/user',router)
}

