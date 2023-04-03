const Axiosx = require('../models/axios.model')



exports.getData =  (req, res) => {
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://io.adafruit.com/api/v2/hongphat03/feeds/anh-sang'
    
  };

  axios.request(options).then(function (response) {
    Axiosx.collection.insertOne({ last_value: response.data['last_value'] });
    res.send(response.data)
  }).catch(function (error) {
    console.log(error)
    console.error(error);
  });
}