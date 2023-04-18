const schedule = require('../models/schedule.model')

const axios = require('axios')

exports.postSchedule = (req, res) => {
    const scheduleList = req.body
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
      schedule.find({dates:data.dates})
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
const postReq = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...',
    'X-AIO-Key':'aio_Ydss25hDmgz9CswD0YQxHhDA0uIA'
  }
  const data2 = {
    "datum":{"value":"ON"}
  }
  
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
    console.log("aa")
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

    //   console.log(schedules[0].time === curTime)

    //   // lặp lại theo tuần
      if(schedules[0].type == "weekly"){
        schedules.forEach((obj) => {
          if(obj.dates === day.toDateString().substring(0,3)){
            console.log(obj.dates)
            console.log(day.toDateString().substring(0,3))
            postReq()
          }
        })
        
      } 
      // lặp lại theo tháng
      else if(schedules[0].type == "monthly"){
        schedules.forEach((obj) => {
          let days = new Date(obj.dates)
          if(days.getDate() === day.getDate()){
            postReq()
          }
        })
      }
      // lặp lại trong khoảng thời gian
      else if(schedules[0].type === "custom"){
        schedules.forEach((obj) => {
          let days = new Date(obj.dates)
          days = days.toDateString();
          if(day.toDateString() === days){
            console.log(days)
            console.log(day.toDateString())
            postReq()
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