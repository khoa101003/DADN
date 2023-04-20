const Device = require('../models/device.model')

exports.getDevices = (req, res) => {
    Device.find({})
        .then(user => res.status(200).send(user))
        .catch(err => res.status(400).send(err))
}

exports.postThreshold = (req,res) => {
    // console.log(req.body)
    const data = req.body
    Device.updateOne({type:"temp", owner:data.owner},
    {
        $set: {
            threshold : {
                min: data.minTemp,
                max: data.maxTemp
            }
        },
    })
    .then(console.log("thanh cong"))
    .catch((err) => console.log(err))

    Device.updateOne({type:"soil",owner:data.owner},
    {
        $set: {
            threshold : {
                min: data.soil,
                max: data.maxSoil
            }
        },
    })
    .then(console.log("thanh cong"))
    .catch((err) => console.log(err))
}