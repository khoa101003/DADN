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

exports.addRegister = (req, res)=>{

    const data = req.body;
    User.findOne({})
        .sort({id: 'desc'})
        .then(latest =>{
            data.id = latest.id + 1;

            User.insertMany([
                {
                    id: data.id,
                    name: data.name,
                    email: data.email, 
                    phone: data.phone,
                    password: data.password, 
                    account: data.account,
                    address: data.address, 
                    role: 'customer', 
                    status: false, 
                    date: data.date, // Ngay sinh, chi co customer co
                }
            ])
        })
}

exports.getOneUser = (req, res)=>{
    User.findOne({account: req.params['account']})
        .then(user => res.status(200).send(user))
        .catch(err => res.status(400).send(err))
}
