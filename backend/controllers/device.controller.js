const Device = require('../models/device.model')

exports.getThreshold = async (id) => {
    const threshold = Device.find({'id' : id})
        .then((res) => {
            return {min: res[0].threshold.min, max: res[0].threshold.max}
        })
        .catch(err => console.log(err))
    return threshold
}

exports.getDevices = (req, res) => {
    Device.find({})
        .then(user => res.status(200).send(user))
        .catch(err => res.status(400).send(err))
}