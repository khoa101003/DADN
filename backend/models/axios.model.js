const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Axiosx = new Schema({
    id: ObjectId,
    name: String,
    owner: String, // Record nay thuoc ve thiet bi nao
    type: String,
    // data.time.max = last value  adafruit (time)
    time: {
        min: { type: Date, default: Date.now },
        max: { type: Date, default: Date.now } //*
    },
    // data.valueList.push({log_time, value})*
    valueList: [
        {
            log_time: { type: Date, default: Date.now },
            value: Number // value = 1/0: on/off. Còn khác giá trị này thì là sensor
            // Muốn kiểm tra giá trị thì dùng thêm trường type ở trên
        }
    ],
    curValue: Number, // render trên web
});

module.exports = mongoose.model('axiosx', Axiosx)
