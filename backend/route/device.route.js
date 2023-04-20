const express = require('express')
const deviceController = require('../controllers/device.controller')

module.exports = app => {
    router = express.Router()
    router.get('/', deviceController.getDevices)
    router.post('/',deviceController.postThreshold)
    app.use('/api/device', router)
}

