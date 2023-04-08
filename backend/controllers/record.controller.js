// const Record = require('../models/axios.model.js')

// const getRecord = (req, res) => {
//     Record.find({})
//         .then(record => res.status(200).send(record))
//         .catch(err => res.status(400).send(err))
// }

// module.exports = getRecord;

const Record = require('../models/record.model')
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

exports.autoUpdate = (req, res)=>{
  const updateValue = async (device, newValue) =>{
    const dt = await Record.collection.findOne(
      {
        id:device.id
      }
    )
    const valueList = dt.valueList;
    if(valueList[valueList.length-1].log_time != newValue.log_time){
      valueList.push(newValue)
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
    console.log(valueList)
  }
  
    devices.forEach((device) => {
    const options = {
      method: 'GET',
      url: `https://io.adafruit.com/api/v2/hongphat03/feeds/${device.key}`
    };
  
    axios.request(options).then(function (response) {
      updateValue(device,{
        log_time:response.data['updated_at'],
        value:response.data['last_value']})
    }).catch(function (error) {
      console.log(error)
      console.error(error);
    });
    })
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
