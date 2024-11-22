const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Home = new Schema({
    id: ObjectId,
    name: String,
    owner: String
});

module.exports = mongoose.model('home', Home)
