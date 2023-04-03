const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    name: String,
    email: String, 
    phone: String,
    password: String, 
    account: String,
    address: String, 
    role: String, 
    status: Boolean, 
    date: String, // Ngay sinh, chi co customer co
    start_date: String // Ngay bat dau lam viec, chi co admin va technician co
});

module.exports = mongoose.model('user', User)
