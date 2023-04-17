const Device = require('../models/device.model')

exports.getDevices = (req, res) => {
    Device.find({})
        .then(user => res.status(200).send(user))
        .catch(err => res.status(400).send(err))
}