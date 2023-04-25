const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Device = new Schema({
    id: Number,
    name: String, // tên của device
    type: String, // loại của device, đèn, máy bơm hoặc cảm biến
    owner: String, // Dùng để biết thiết bị thuộc khu vườn nào. owner = customer
    coord: {
        x: Number,
        y: Number
    },
    status: Boolean, // true = hoạt động, false = đang hỏng     
    sensorType: String,
    threshold: {
        min: Number,
        max: Number
    },
    water: Number,
    time: Number
});

module.exports = mongoose.model('device', Device)


// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId
// // try {
// //     mongoose.connect('mongodb://127.0.0.1:27017/test');
// //     console.log("Connect Successfully!")
// // }
// // catch (err) {
// //     console.log(err)
// // }

// const Device = new Schema({
//     id: ObjectId,
//     name: String,
//     status: Boolean,
//     coordinates: {
//         x: Number,
//         y: Number
//     },
//     typeDevice: {
//         type: String,
//         enum: ['Sensor', 'Pump', 'LED'],
//         required: true,
//     },
//     inforDevice: {
//         sensorType: {
//             type: [String],
//             enum: ['Temperature', 'Air Humidity', 'Soil Humidity'],
//             required: function () {
//                 return this.typeDevice === 'Sensor'
//             }
//         },
//         alarmThreshold: {
//             type: {
//                 min: Number,
//                 max: Number,
//             },
//             required: function () {
//                 return this.typeDevice === 'Sensor'
//             }
//         },
//         timeToWater: {
//             type: [Date],
//             required: function () {
//                 return this.typeDevice === 'Pump'
//             }
//         },
//         waterAmount: {
//             type: Number,
//             required: function () {
//                 return this.typeDevice === 'Pump'
//             }
//         },
//     },
//     size: Number,
//     price: Number,
//     warrantyTime: Date,
//     installationTime: Date
// })

// module.exports = mongoose.model('device', Device)

// DeviceSchema.pre('save', function (next) {
//     if (this.typeDevice === 'LED') {
//         this.inforDevice = undefined;
//     }
//     next();
// });

// const Device = new mongoose.model('device', DeviceSchema)
// const x = new Device({
//     name: 'Đèn LED siêu sáng',
//     status: true,
//     coordinates: {
//         x: 2,
//         y: 1
//     },
//     inforDevice: {
//         sensorType: ['Temperature', 'Air Humidity'],
//         alarmThreshold: {
//             min: 25,
//             max: 40,
//         }
//     },
//     typeDevice: 'LED',
//     size: 20,
//     price: 10000,
//     warrantyTime: Date.now(),
//     installationTime: Date.now()
// })

// x.save()
//     .then((result) => {
//         console.log("Saved:", result)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })

module.exports = mongoose.model('device', Device)