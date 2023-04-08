const mongoose = require('mongoose')


async function connect() {
    const URL = 'mongodb://0.0.0.0:27017/smartgarden' 
    
    try{
        await mongoose.connect(URL)
            .then(()=> console.log('DB Connected!!!'));
    }
    catch(error){
        console.log('Connect fail!!! ', error)
    }
}

module.exports = { connect }
