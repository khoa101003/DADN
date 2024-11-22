const { checkThreshold } = require('./checkThreshold')
const { autoPump } = require('./autoPump')
const {turnOnAuto, turnOffAuto} = require('./schedule.controller')
const Observable = require('./Observer')

exports.controlAutoPump = (req,res) => {
    const value = req.params['value'];
    if(value === '1'){
        //Observable.subscribe(autoPump)
        turnOnAuto()
        console.log("subscribe")
    }
    else if(value === '0'){
        turnOffAuto()
        console.log("unsubscribe")
    }
    res.send("OK")
  }

exports.controlCheckThreshold = (req,res) => {
    const value = req.params['value']
    if(value === '1'){
        Observable.subscribe(checkThreshold)
    }
    else if(value === '0'){
        Observable.unsubscribe(checkThreshold);
    }
    res.send("OK")
}