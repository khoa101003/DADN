const express = require('express')
const deviceController = require('../controllers/device.controller')

module.exports = app => {
    router = express.Router()
    router.get('/', deviceController.getDevices)
    app.use('/api/device', router)
}

