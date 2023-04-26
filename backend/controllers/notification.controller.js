const Notification = require('../models/notification.model')
const nodemailer = require("nodemailer");
const { getUserMail } = require('./user.controller');

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
    user: "smartgardenabc@gmail.com",
    pass: "eognbntaaoecrkok"
   }
});

const getNotification = (req, res) => {
    const URL = req.ip
    console.log(`Receive get notification request from ${URL}`)
    Notification.find({userID: req.params.account})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err.message)
        })
}

const createNotification = async (typeN, userIDN, urgentN, measureN, thresholdN, timeN, gardenNameN, xN, yN) => {
    const title = typeN === 'Soil Humidity' ? 'độ ẩm đất'
        : typeN === 'Air Humidity' ? 'độ ẩm không khí'
        : 'nhiệt độ';

    const mail = await getUserMail(userIDN)
    const mailOptions = {
        from: "luuhai12324@gmail.com",
        to: mail,
        subject: `Cảnh báo mảnh vườn của khách hàng ${userIDN}`,
        html: `
        <html>
            <style>
            table, th, td {
            border:1px solid black;
            }
            </style>
        <body>
        <h1> Cảnh báo ${title} </h1>
        <table style="width:100%">
        <tr>
            <td>Thời gian: ${timeN}</td>
            <td>Nhiệt độ đo được: ${measureN}</td>
        </tr>
        <tr>
            <td>Mảnh vườn: ${gardenNameN}</td>
            <td>Nhiệt độ ngưỡng: ${thresholdN}</td>
        </tr>
        <tr>
            <td>Vị trí: ${xN} ${yN}</td>
        </tr>
        </table>
        </body>
        </html>
        `
     };
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
           console.log(error);
        }else{
           console.log("Email sent: " + info.response);
        }
     });

    const newNotification = new Notification({
        type: typeN,
        userID: userIDN,
        urgent: urgentN,
        isRead: false,
        measure: measureN,
        threshold: thresholdN,
        time: timeN,
        gardenName: gardenNameN,
        coordinates: {
            x: xN,
            y: yN
        },
    })

    await newNotification.save()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            res.status(400).send(err.message)
        })

    return "success"
}

const deleteNotification = (req, res) => {
    const URL = req.ip
    console.log(`Receive delete notification request from ${URL}`)

    Notification.findByIdAndDelete(req.query._id)
        .then((doc) => {
            console.log(doc)
        })
        .catch(err => {
            res.status(400).send(err.message)
        })
    
    res.sendStatus(200)
}

const markReadedNotification = (req, res) => {
    const URL = req.ip
    console.log(`Receive mark read notification request from ${URL}`)

    Notification.findOneAndUpdate({_id : req.query._id}, {isRead: true}, {new: true})
        .then((doc) => {
            console.log(doc)
        })
        .catch(err => {
            res.status(400).send(err.message)
        })

    res.sendStatus(200)
}

module.exports = {
    getNotification,
    createNotification,
    deleteNotification,
    markReadedNotification,
}