const Device = require('../models/device.model')

exports.generateDevice = (req, res) => {
    const sensorList = ['light', 'temp', 'soil', 'air']
    const device_type = req.params['type'] 
    const query = { owner: req.params['owner'], type: req.params['type'] }
    let fieldList = ""
    if (sensorList.includes(device_type))
        fieldList = "id name type owner coordinates status threshold"
    else if (device_type == "pump")
        fieldList = "id name type owner coordinates status water"
    else 
        fieldList = "id name type owner coordinates status time"
    Device.find(query, fieldList)
        .then(record => res.status(200).send(record))
        .catch(err => res.status(400).send(err))
}