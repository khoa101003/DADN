const Home = require('../models/home.model')

exports.getName = (req, res)=>{
    Home.find({})
        .then(home => res.status(200).send(home))
        .catch(err => res.status(400).send(err))
}
