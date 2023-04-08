// const Record = require('../models/axios.model.js')

// const getRecord = (req, res) => {
//     Record.find({})
//         .then(record => res.status(200).send(record))
//         .catch(err => res.status(400).send(err))
// }

// module.exports = getRecord;

const Record = require('../models/record.model')

exports.getRecord = (req, res) => {
    Record.find({})
        .then(record => {
            // res.status(200).send({ "hi": "hi" })
            res.status(200).send(record)
        })
        .catch(err => res.status(400).send(err))
}
