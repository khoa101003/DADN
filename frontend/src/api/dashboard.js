import axios from 'axios'

const URL = 'http://localhost:3030/api/dashboard'
export const getCurValue = async () => {
    return await axios.get(`${URL}`).then(res => res.data).catch((err) => console.log(err))
}