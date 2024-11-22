const express = require('express')
const requestController = require('../controllers/request.controller')

module.exports = app => {
    router = express.Router()
    router.post('/regis-gar', requestController.registerHome)
    router.post('/modify-gar', requestController.modifyHome)
    router.post('/del-gar', requestController.deleteHome)
    router.get('/', requestController.getRequest)
    router.post('/', requestController.hideRequest)
    app.use('/api/request', router)
}

