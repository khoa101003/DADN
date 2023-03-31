const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Garden = new Schema({
    id: Object,
    name: String,
    owner: String
});

module.exports = mongoose.model('garden', Garden)
