const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Record = new Schema({
    id: ObjectId,
    name: String,
    owner: String, // Record nay thuoc ve thiet bi nao
    time: {
        min: { type: Date, default: Date.now },
        max: { type: Date, default: Date.now }
    },
    value: [Number],
    current: Number,


});

module.exports = mongoose.model('record', Record)
