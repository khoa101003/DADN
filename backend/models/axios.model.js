const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Axiosx = new Schema({
    last_value: Number
});

module.exports = mongoose.model('axiosx', Axiosx)
