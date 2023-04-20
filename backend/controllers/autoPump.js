const { default: axios } = require('axios')
const Observable = require('./Observer')
const device = require('../models/device.model')


module.exports.logger = function (data) {
    if(data['do-am-dat']){
        device.find({type:"soil",owner:"phongong"})
        .then((device) => {
            if(data['do-am-dat'] < device[0].threshold.min){
                console.log("tuoi")
            }
            else{
                console.log("ko tuoi")
            }

        })
        .catch((err) => console.log(err))
    }
}
  