const express = require('express')
const db = require('./config/dbconfig')
const cors = require('cors');
const app = express()
const http = require('http')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});


//Connect to database
db.connect();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // const obj = {
  //   arr:[
  //     {
  //       log:"123",
  //       value:"11"
  //     }
  //   ]
  // }
  // obj.arr.push({log:"9999",value:"1234"});
  // res.send(obj);
})


require('./route/garden.route')(app)
// require('./route/axios.route')(app)
require('./route/notification.route')(app)
require('./route/user.route')(app)

require('./route/record.route')(app, io)

//require('./route/schedule.route')(app)
require('./route/static_record.route')(app)
require('./route/device.route')(app)
require('./route/garden_piece.route')(app)
require('./route/request.route')(app)
require('./route/Factory.route')(app)

const { logger } = require('./controllers/autoPump')
const { checkThreshold } = require('./controllers/checkThreshold')
const Observable = require('./controllers/Observer')
Observable.subscribe(logger)
Observable.subscribe(checkThreshold)
const port = 3030

io.on('connection', (socket) => {
  socket.on('notify', (acc) => {
    socket.join(`notify-${acc}`)
  })

  socket.on('statis', (acc, id) => {
    socket.join(`statis-${acc}-${id}`)
  })

  socket.on("disconnect", () => {
    console.log('Disconnected')
  })
})

server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
