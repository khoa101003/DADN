const express = require('express')
const schedule = require('../controllers/schedule.controller')
const userController = require('../controllers/user.controller')

module.exports = app =>{
    router = express.Router()
    router.post('/:id',schedule.updateSchedule)
    router.post('/', schedule.postSchedule);

    // const intervalObj = setInterval(()=>{
    //     schedule.getSchedule()
    // },1000);

    router.get('/listSchedule', schedule.getListSchedule);
    router.get('/', schedule.getSchedule);
    router.delete('/:id',schedule.deleteById);
    app.use('/api/schedulee',router)
}

