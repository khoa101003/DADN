const User = require('../models/user.model')

exports.getUsers = (req, res)=>{
    User.find({})
        .then(user => res.status(200).send(user))
        .catch(err => res.status(400).send(err))
}