const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Device = new Schema({
    id: ObjectId,
    name: String,
    status: Boolean,
    garden: ObjectId,
    coordinates: {
        x: Number,
        y: Number
    },
    typeDevice: {
        type: String,
        enum: ['Sensor', 'Pump', 'LED'],
        required: true,
    },
    inforDevice: {
        sensorType: {
            type: [String],
            enum: ['Temperature', 'Air Humidity', 'Soil Humidity'],
            required: function () {
                return this.typeDevice === 'Sensor'
            }
        },
        alarmThreshold: {
            type: {
                min: Number,
                max: Number,
            },
            required: function () {
                return this.typeDevice === 'Sensor'
            }
        },
        timeToWater: {
            type: [Date],
            required: function () {
                return this.typeDevice === 'Pump'
            }
        },
        waterAmount: {
            type: Number,
            required: function () {
                return this.typeDevice === 'Pump'
            }
        },
    },
    size: Number,
    price: Number,
    warrantyTime: Date,
    installationTime: Date
})

DeviceSchema.pre('save', function (next) {
    if (this.typeDevice === 'LED') {
        this.inforDevice = undefined;
    }
    next();
});

module.exports = mongoose.model('device', Device)