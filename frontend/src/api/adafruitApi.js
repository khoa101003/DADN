import axios from 'axios';

export const switchPump = async (props) =>{
    const value = props?"ON":"OFF"
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...',
        'X-AIO-Key':'aio_PGDN75wlGxbqxkgjmCqnMR3HXnDO'
      }
      const data2 = {
        "datum":{"value":value}
      }
        console.log(data2)

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

const URL = 'https://io.adafruit.com/api/v2/hongphat03/feeds';
export const getCurValueTemp = async () => {
  const temp = await axios.get(`${URL}/nhiet-do`).then(res => res.data['last_value']).catch((err) => console.log(err))
  const humidity = await axios.get(`${URL}/do-am`).then(res => res.data['last_value']).catch((err) => console.log(err))
  const soil = await axios.get(`${URL}/do-am-dat`).then(res => res.data['last_value']).catch((err) => console.log(err))
  const light = await axios.get(`${URL}/anh-sang`).then(res => res.data['last_value']).catch((err) => console.log(err))
  const data = {
    "temp":temp,
    "humidity":humidity,
    "soil":soil,
    "light":light
  }
  return data
}

// export const getCurValueHumidity = async () => {
//   return await axios.get(`${URL}/do-am`).then(res => res.data['last_value']).catch((err) => console.log(err))
// }

// export const getCurValueSoil = async () => {
//   return await axios.get(`${URL}/do-am-dat`).then(res => res.data['last_value']).catch((err) => console.log(err))
// }

// export const getCurValueLight = async () => {
//   return await axios.get(`${URL}/anh-sang`).then(res => res.data['last_value']).catch((err) => console.log(err))
// }