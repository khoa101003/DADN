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

require('./route/garden.route')(app)

const port = 3030

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})