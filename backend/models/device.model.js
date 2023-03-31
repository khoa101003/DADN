const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Device = new Schema({
    id: ObjectId,
    name: String,
    type: String,
    owner: String,
    coord: {
        x: Number,
        y: Number
    },
    price: Number,
    status: Boolean,
    start_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('device', Device)
