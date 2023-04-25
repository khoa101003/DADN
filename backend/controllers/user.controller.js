const User = require('../models/user.model')

exports.getUserMail = async (account)=>{
    const email = User.find({'account': account})
        .then(user => user[0].email)
        .catch(err => console.log(err))
    return email
}

exports.getUsers = (req, res)=>{
    User.find({})
        .then(user => res.status(200).send(user))
        .catch(err => res.status(400).send(err))
}