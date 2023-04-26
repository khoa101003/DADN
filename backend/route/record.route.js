// const express = require('express')
// const router = express.Router()
// const RecordController = require('../controllers/record.controller')


// router.get("/record", RecordController.getRecord)

// module.exports = router

const express = require('express')
const RecordController = require('../controllers/record.controller')

module.exports = (app, io) => {
    router = express.Router()
    const intervalObj = setInterval(()=>{

        RecordController.autoUpdate(io)
    },1000);
    router.get('/', RecordController.getRecord)
    router.get('/:piece', RecordController.getPrivateRec)
    app.use('/api/record', router)
}

