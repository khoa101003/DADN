const express = require('express')
const db = require('./config/dbconfig')
const cors = require('cors');

const app = express()
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

require('./route/user.route')(app)

require('./route/record.route')(app)

require('./route/schedule.route')(app)
require('./route/static_record.route')(app)
require('./route/device.route')(app)
require('./route/garden_piece.route')(app)
require('./route/request.route')(app)
require('./route/Factory.route')(app)

const { logger } = require('./controllers/autoPump')
const Observable = require('./controllers/Observer')
Observable.subscribe(logger)
const port = 3030



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})