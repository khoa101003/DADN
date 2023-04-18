const express = require('express')
const Factory = require('../controllers/Factory.controller')

module.exports = app => {
    router = express.Router()
    router.get('/:owner/:type', Factory.generateDevice)
    app.use('/api/factory', router)
}