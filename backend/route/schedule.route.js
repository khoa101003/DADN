const express = require('express')
const schedule = require('../controllers/schedule.controller')
const userController = require('../controllers/user.controller')

module.exports = app =>{
    router = express.Router()
    router.post('/', schedule.postSchedule);
    // setInterval(()=>{
    //     schedule.getSchedule()
    //   },500);
    router.get('/listSchedule', schedule.getListSchedule);
    router.get('/', schedule.getSchedule);
    app.use('/api/schedulee',router)
}

