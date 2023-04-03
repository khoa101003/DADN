const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Device = new Schema({
    id: ObjectId,
    name: String,
    type: String, // value = ['sensor','pump', 'light']
    owner: String, // Dùng để biết thiết bị thuộc khu vườn nào
    coord: {
        x: Number,
        y: Number
    },
    price: Number,
    status: Boolean,
    start_date: { type: Date, default: Date.now },
    sensor_type: String, 
    threshold: {
        min: Number,
        max: Number
    },
    water: Number,
    time: Number
});

module.exports = mongoose.model('device', Device)
