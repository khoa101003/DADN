const schedule = require('../models/schedule.model')

const axios = require('axios')

exports.postSchedule = (req, res) => {
    const scheduleList = req.body
    console.log(scheduleList)
    const dates = scheduleList.dates
    // đổi chế độ tưới -> xóa hết chế độ cũ
    schedule.find({type:scheduleList.type})
    .then(data => {
      if(data.length == 0) schedule.collection.deleteMany({})
    })
    dates.map((date) => {
      const data = {
        ...scheduleList,
        dates:date.substring(0,10)
      }
      // insert nếu ngày đó chưa có trong db
      schedule.find({dates:data.dates, time:date.time})
      .then((sche) => {
        if(sche.length == 0){
          schedule.collection.insertOne(data)
        }
      })
    })
    // schedule.collection.remove({})
    // schedule.collection.deleteMany({})
    // schedule.collection.insertOne(data)
}


// send request turn on pump
const postReq = (props) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...',
    'X-AIO-Key':'aio_CaAk91HEKZv9uM95w8YxZqdK2uo8'
  }
  const data2 = {
    "datum":
    {
      "value":"ON"
    }
  }
  console.log(new Date())
  axios.post('https://io.adafruit.com/api/v2/hongphat03/feeds/maybom/data', data2, {
      headers: headers
    })
    .then((response) => {
      console.log("OK")
    })
    .catch((error) => {
      console.log(error)
      console.error(error);
    })
}

const turnOff = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...',
    'X-AIO-Key':'aio_CaAk91HEKZv9uM95w8YxZqdK2uo8'
  }
  const data2 = {
    "datum":
    {
      "value":"OFF"
    }
  }
  console.log(new Date())
  axios.post('https://io.adafruit.com/api/v2/hongphat03/feeds/maybom/data', data2, {
      headers: headers
    })
    .then((response) => {
      console.log("OK")
    })
    .catch((error) => {
      console.log(error)
      console.error(error);
    })
}

exports.getSchedule = () => {
    schedule.find({})
    .then(schedules => {
      console.log(schedules)
      // get current date, time
      let day = new Date()
      let hour = new Date().getHours();
      hour = hour<10?"0"+hour.toString():hour.toString();
      let minute = new Date().getMinutes();
      minute = minute<10?"0"+minute.toString():minute.toString();
      let curTime = hour+":"+minute;

    //   // lặp lại theo tuần
      if(schedules[0].type == "weekly"){
        schedules.forEach((obj) => {
          console.log(obj.time)
          console.log(curTime)
          if(obj.dates === day.toDateString().substring(0,3) && obj.time === curTime){
            console.log(day.toDateString().substring(0,3))
            postReq({owner:schedules[0].owner})
          }
        })
        
      } 
      // lặp lại theo tháng
      else if(schedules[0].type == "monthly"){
        schedules.forEach((obj) => {
          let days = new Date(obj.dates)
          if(days.getDate() === day.getDate() && obj.time === curTime){
            postReq({owner:schedules[0].owner})
            const timer = Math.floor(obj.water/1.5)
            console.log(timer)
            setTimeout(() => {
              turnOff();
            },timer)
            const month = days.getMonth()+1 < 12 ? days.getMonth()+1:0
            days.setMonth(month)
            schedule.collection.updateOne({_id: obj._id},{
              $set:{
                dates:days.toISOString().substring(0,10)
              }
            })
          }
        })
      }
      // lặp lại trong khoảng thời gian
      else if(schedules[0].type === "custom"){
        schedules.forEach((obj) => {
          let days = new Date(obj.dates)
          days = days.toDateString();
          if(day.toDateString() === days && obj.time === curTime){
            postReq({owner:schedules[0].owner})
            const timer = Math.floor(obj.water/1.5)
            console.log(timer)
            setTimeout(() => {
              turnOff();
            },timer)
            schedule.collection.deleteOne({dates:schedules[0].dates})
          }
        })
      }
    })
    .catch(err => console.log(err))
    // res.status(200).send("Success")
}

exports.getListSchedule = (req,res) => {
  schedule.find({})
  .then(schedules => {
    res.send(schedules)
})
  .catch((err) => console.log(err))
}

exports.deleteById = (req,res) => {
  console.log(req.params['id'])
  schedule.find({_id:req.params['id']})
  .then(sche => {
    const query = {dates:sche[0].dates}
    schedule.collection.deleteOne(query, function(err, obj) {
      if (err) throw err;
    });
  })
}

exports.updateSchedule = (req,res) => {
 
  schedule.find({_id:req.params['id']})
  .then(sche => {
    const data = req.body
    const query = {dates:sche[0].dates}
    const updateDoc = {
      $set: {
        time:data.time,
        water:data.water
      },
    };
    schedule.collection.updateOne(query,updateDoc)
  })
}