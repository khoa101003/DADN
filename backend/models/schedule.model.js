const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Schedule = new Schema({
    id: ObjectId,
    time:String,
    water:Number,
    type:String,
    dates:[]
});
module.exports = mongoose.model('schedule', Schedule)
