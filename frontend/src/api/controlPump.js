import axios from 'axios';

export const switchPump = async (props) =>{
    const value = props?"ON":"OFF"
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...',
        'X-AIO-Key':'aio_zluZ62Dmvv8y7Y6EhwmEIKOEYsuO'
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