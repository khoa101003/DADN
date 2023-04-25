const express = require('express')
const deviceController = require('../controllers/device.controller')

module.exports = app => {
    router = express.Router()
    router.get('/', deviceController.getDevices)
    router.get('/threshold', deviceController.getThreshold)
    router.post('/',deviceController.postThreshold)
    app.use('/api/device', router)
}

