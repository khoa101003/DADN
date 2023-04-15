const schedule = require('../models/schedule.model')

const axios = require('axios')
// exports.postSchedule = (req, res)=>{
//     // console.log("abc")
// }

// exports.postSchedule = async (req, res) => {
//     // model.create(req.body, (err, data) => {
//     //   if (err) {
//     //     res.status(400).send(err);
//     //   } else {
//     //     res.status(200).send(data);
//     //   }
//     // });
//     res.send({a:"AA"})
// };
// const Record = require('../models/record.model')

exports.postSchedule = (req, res) => {
    console.log(req.body)
    data = req.body
    console.log(data)
    // schedule.collection.remove({})
    schedule.collection.deleteMany({})
    schedule.collection.insertOne(data)
}


// send request turn on pump
const postReq = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...',
    'X-AIO-Key':'aio_gkEv861mJUppkg8eGL9yVwNOpe9C'
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

exports.getSchedule = (req,res) => {
    schedule.find({
      "type" : { "$in": ["custom", "monthly","weekly"] }
    })
    .then(schedules => {
      
      // get current date, time
      let day = new Date()
      let hour = new Date().getHours();
      hour = hour<10?"0"+hour.toString():hour.toString();
      let minute = new Date().getMinutes();
      minute = minute<10?"0"+minute.toString():minute.toString();
      let curTime = hour+":"+minute;

      console.log(schedules[0].time === curTime)

      // lặp lại theo tuần
      if(schedules[0].type == "weekly" && schedules[0].dates[0][day.toDateString().substring(0,3)]){
        postReq()
      } 
      // lặp lại theo tháng
      else if(schedules[0].type == "monthly"){
        // lấy ra ngày nhỏ nhất
        const arr = schedules[0].dates.sort()
        let days = new Date(schedules[0].dates[0])
        // so sáng với ngày hiện tại  
        if(days.getDate() === day.getDate()){
          postReq()
        }
      }
      // lặp lại trong khoảng thời gian
      else if(schedules[0].type === "custom"){
        // lấy ra ngày nhỏ nhất
        const arr = schedules[0].dates.sort()
        let days = new Date(schedules[0].dates[0])
        days = days.toDateString();

        if(day.toDateString() === days){
          postReq()
          // xóa ngày vừa tưới 
          arr.shift()
          schedule.collection.updateOne(
            {},
            {$set:{dates:arr}}
          )
        }
      }
    })
    .catch(err => console.log(err))
    res.status(200).send("Success")
}

exports.getListSchedule = (req,res) => {
  schedule.find({
    "type" : { "$in": ["custom", "monthly","weekly"] }
  })
  .then(schedules => {
    res.send(schedules)
})
  .catch((err) => console.log(err))
}