const mongoose = require('mongoose')


async function connect() {
    const URL = 'mongodb://localhost:27017/mongo_db'

    try {
        await mongoose.connect(URL)
            .then(() => console.log('DB Connected!!!'));
    }
    catch (error) {
        console.log('Connect fail!!! ', error)
    }
}

module.exports = { connect }
