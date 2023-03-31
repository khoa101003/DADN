const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Record = new Schema({
    id: ObjectId,
    name: String,
    owner: String, // Record nay thuoc ve thiet bi nao
    type: String,
    time: {
        min: { type: Date, default: Date.now },
        max: { type: Date, default: Date.now }
    },
    value_list: [
        {
            log_time: { type: Date, default: Date.now },
            value: Number // value = 1/0: on/off. Còn khác giá trị này thì là sensor
            // Muốn kiểm tra giá trị thì dùng thêm trường type ở trên
        }
    ],
    current: Number, // render trên web
});

module.exports = mongoose.model('record', Record)
