const express = require('express')
const {
    getNotification,
    deleteNotification,
    markReadedNotification,
} = require('../controllers/notification.controller')


module.exports = app => {
    router = express.Router()
    router.route('/')
        .get(getNotification)
        .delete(deleteNotification)
        .patch(markReadedNotification)

    app.use('/api/notification', router)
}