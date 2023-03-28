const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Garden = new Schema({
    id: {type: ObjectId},
    name: {type: String}
});

module.exports = mongoose.model('garden', Garden)
