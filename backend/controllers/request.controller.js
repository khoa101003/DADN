const Request = require('../models/request.model')

exports.registerGarden = (req, res)=>{
    data = req.body
    Request.insertMany([
        {
            status: true,
            name: 'Register Garden',
            sender: data.sender,
            description: 'Register garden request',
            device: [
                {
                    name: data.device[0].name,
                    quantity: data.device[0].quantity
                },
                {
                    name: data.device[1].name,
                    quantity: data.device[1].quantity
                },
                {
                    name: data.device[2].name,
                    quantity: data.device[2].quantity
                },
                {
                    name: data.device[3].name,
                    quantity: data.device[3].quantity
                },
                {
                    name: data.device[4].name,
                    quantity: data.device[4].quantity
                }
            ],
            registerGarden: data.registerGarden
        }
    ])
}

exports.modifyGarden = (req, res)=>{
    data = req.body
    Request.insertMany([
        {
            status: true,
            name: 'Modify Garden',
            sender: data.sender,
            description: 'Modify garden request',
            device: [
                {
                    name: data.device[0].name,
                    quantity: data.device[0].quantity
                },
                {
                    name: data.device[1].name,
                    quantity: data.device[1].quantity
                },
                {
                    name: data.device[2].name,
                    quantity: data.device[2].quantity
                },
                {
                    name: data.device[3].name,
                    quantity: data.device[3].quantity
                },
                {
                    name: data.device[4].name,
                    quantity: data.device[4].quantity
                }
            ],
            registerGarden: data.registerGarden
        }
    ])
}
