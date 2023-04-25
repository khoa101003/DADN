
const { autoPump } = require('./autoPump')
const Observable = require('./Observer')

exports.controlObserver = (req,res) => {
    const value = req.params['value'];
    console.log(value)
    if(value === '1'){
        console.log("subcribe")
        Observable.subscribe(autoPump)
    }
    else if(value === '0'){
        console.log("unsubcribe")
        Observable.unsubscribe(autoPump);
    }
    res.send("OK")
  }