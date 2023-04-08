const express = require('express')
const axiosController = require('../controllers/axios')

module.exports = app =>{
    router = express.Router()
    router.get('/axios', axiosController.getData)
    app.use('/api/axios',router)
}
