const express = require('express')
const homeController = require('../controllers/home.controller')

module.exports = app => {
    router = express.Router()
    router.get('/', homeController.getName)
    app.use('/api/home', router)
}

