const userInput = require('../models/userInput.model')

exports.importUserInput = (req, res)=>{
    const data = req.body
    userInput.collection.deleteMany({})
    userInput.collection.insertOne(data)
    res.send("OK")
}