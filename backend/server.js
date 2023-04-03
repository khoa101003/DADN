const express = require('express')
const db = require('./config/dbconfig')
const cors = require('cors')


const app = express()
//Connect to database
db.connect();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/a', (req, res) => {
  const axios = require("axios");

  let payload = {last_value:"ON" };

  let ress = axios.post('https://io.adafruit.com/api/v2/hongphat03/feeds/maybom', payload);

  let data = ress.data;
  console.log(data);
})

require('./route/garden.route')(app)
require('./route/axios.route')(app)

const port = 3030

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})