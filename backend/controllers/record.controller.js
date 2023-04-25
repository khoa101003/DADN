// const Record = require('../models/axios.model.js')

// const getRecord = (req, res) => {
//     Record.find({})
//         .then(record => res.status(200).send(record))
//         .catch(err => res.status(400).send(err))
// }

// module.exports = getRecord;
const Observable = require('./Observer')
const Record = require('../models/record.model')
const { createNotification } = require('./notification.controller')
const { getThreshold } = require('./device.controller')

const devices = [
  {
    id:1,
    key:"anh-sang",
    name:"Light sensor"
  },
  {
    id:2,
    key:"do-am",
    name:"DHT20 Sensor"
  },
  {
    id:3,
    key:"nhiet-do",
    name:"DHT20 Sensor"
  },
  {
    id:4,
    key:"do-am-dat",
    name:"Soil Moisture"
  },
  {
    id:5,
    key:"maybom",
    name:"Mini Pump"
  },
]

const axios = require("axios");
const { logger } = require('./autoPump');

exports.autoUpdate = (io)=>{
  const updateValue = async (device, newValue) =>{
    const dt = await Record.collection.findOne(
      {
        id:device.id
      }
    )
    const valueList = dt.valueList;
    if(valueList[valueList.length-1].log_time != newValue.log_time){
      valueList.push(newValue)
      await Record.collection.updateOne(
          {
            id:device.id
          },
          {
            $set:
            {
              valueList:valueList,
              curValue:newValue.value
            }
          }
        )

      if (io.sockets.adapter.rooms.has(`statis-${dt.owner}-${dt.id}`)) {
        io.to(`statis-${dt.owner}-${dt.id}`).emit('newData')
      }


      // Kiểm tra ngưỡng giá trị
      if (dt.type !== 'pump' && dt.type !== 'led' && dt.type !== 'light') {
        const {min, max} = await getThreshold(dt.id)
        if (newValue.value < min || newValue.value > max) {
          const threshold = newValue.value < min ? min : max;
          const type = dt.type === 'air' ? "Air Humidity"
                  : dt.type === 'temp' ? "Temperature" 
                  : "Soil Humidity";
          await createNotification(type, dt.owner, false, newValue.value, threshold, newValue.log_time, "SuperGarden", 1, 5)
        }
        if (io.sockets.adapter.rooms.has(`notify-${dt.owner}`)) {
          io.to(`notify-${dt.owner}`).emit('newNotify')
        }
      }
      ////////////////////////
    }
    // console.log(valueList)
  }
  // let data = []
    devices.forEach((device) => {
    const options = {
      method: 'GET',
      url: `https://io.adafruit.com/api/v2/hongphat03/feeds/${device.key}`
    };
  
    axios.request(options).then(function (response) {
      updateValue(device,{
        log_time:response.data['updated_at'],
        value:response.data['last_value']})
      // data = {
      //   ...data,
      //   [device.key]:response.data['last_value']
      // }
      Observable.notify({[device.key]:response.data['last_value']})
    }).catch(function (error) {
      console.log(error)
      console.error(error);
    });
    })
    // console.log(data)
}

exports.getData =  (req, res) => {
  
  const getData = async (device, newValue) =>{
    const dt = await Record.collection.findOne(
      {
        id:device.id
      }
    )
    const valueList = dt.valueList;
    valueList.push(newValue)
    console.log(valueList)
    Record.collection.updateOne(
        {
          id:device.id
        },
        {
          $set:
          {
            valueList:valueList,
            curValue:newValue.value
          }
        }
      )
  }
  
    devices.forEach((device) => {
    const options = {
      method: 'GET',
      url: `https://io.adafruit.com/api/v2/hongphat03/feeds/${device.key}`
    };
  
    axios.request(options).then(function (response) {
      getData(device,{
        log_time:response.data['updated_at'],
        value:response.data['last_value']})
      res.send(response.data)
    }).catch(function (error) {
      console.log(error)
      console.error(error);
    });
    })
  

}

exports.getRecord = (req, res) => {
    Record.find({})
        .then(record => {
            // res.status(200).send({ "hi": "hi" })
            res.status(200).send(record)
        })
        .catch(err => res.status(400).send(err))
}

exports.getPrivateRec = (req,res) =>{
  const query = { garPiece: req.params['piece'] }
  Record.find(query)
  .then(record=>res.status(200).send(record))
  .catch(err=>res.status(400).send(err))
}