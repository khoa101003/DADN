const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserInput = new Schema({
    owner:String,
    minTemp:Number,
    maxTemp:Number,
    soil:Number,
    maxSoil:Number
});

module.exports = mongoose.model('userInput', UserInput)
