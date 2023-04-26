const { default: axios } = require('axios')
const Observable = require('./Observer')
const device = require('../models/device.model')
const { turnOn, turnOff } = require('./schedule.controller')


module.exports.autoPump = function (data) {
    // console.log(data)
    if(data['do-am-dat']){
        device.find({type:"soil",owner:data.owner})
        .then((device) => {
            console.log(data['do-am-dat'])
            console.log( device[0].threshold.min)
            if(data['do-am-dat'] < device[0].threshold.min){
                // console.log("tuoi")
                turnOn("system");
            }
            else{
                // console.log("ko tuoi")
                turnOff("system");
            }

        })
        .catch((err) => console.log(err))
    }
}
  