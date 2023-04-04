const Axiosx = require('../models/axios.model')
const axiosx = new Axiosx();
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

exports.getData =  (req, res) => {
  const axios = require("axios");
  const getData = async (device, newValue) =>{
    const dt = await Axiosx.collection.findOne(
      {
        id:device.id
      }
    )
    const valueList = dt.valueList;
    valueList.push(newValue)
    console.log(valueList)
    Axiosx.collection.updateOne(
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
  //   console.log()
    // Axiosx.collection.updateOne(
    //   {
    //     id:device.id
    //   },
    //   {
    //     $set:
    //     {
    //       "name":"light"
    //     }
    //   }
    // )
    const options = {
      method: 'GET',
      url: `https://io.adafruit.com/api/v2/hongphat03/feeds/${device.key}`
    };
  
    axios.request(options).then(function (response) {
      // data = { 
      //   id:device.id,
      //   name:device.name,
      //   owner:response.data['id'],
      //   type:response.data['name'],
      //   time: {max:response.data['updated_at']},
      //   valueList:[
      //     {
      //       logTime:response.data['updated_at'],
      //       value:response.data['last_value']
      //     }
      //   ],
      //   curValue:response.data['last_value']
      // }
      // Axiosx.collection.insertOne(data);
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