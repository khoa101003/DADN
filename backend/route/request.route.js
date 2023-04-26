const express = require('express')
const requestController = require('../controllers/request.controller')

module.exports = app => {
    router = express.Router()
    router.post('/regis-gar', requestController.registerGarden)
    router.post('/modify-gar', requestController.modifyGarden)
    router.post('/del-gar',requestController.deleteGarden)
    app.use('/api/request', router)
}

