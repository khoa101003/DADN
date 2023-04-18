const Notification = require('../models/notification.model')
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "luuhai12324@gmail.com",
      pass: "jozeigzvwvcziglh"
   }
});

const mailOptions = {
   from: "luuhai12324@gmail.com",
   to: "lauhoi2010@gmail.com",
   subject: "Nodemailer Test",
   html: "Test <button>sending</button> Gmail using Node JS"
};

const getNotification = (req, res) => {
    const URL = req.ip
    console.log(`Receive get notification request from ${URL}`)
    Notification.find({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err.message)
        })
}

const createNotification = (typeN, userIDN, urgentN, measureN, thresholdN, timeN, gardenNameN, xN, yN) => {
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

    newNotification.save()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            res.status(400).send(err.message)
        })
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