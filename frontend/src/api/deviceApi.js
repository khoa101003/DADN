import axios from 'axios'

const URL = 'http://localhost:3030/api/device'
export const getDeviceList = async (account) => {
    return await axios.get(`${URL}`)
        .then((res) => {
            return res.data.filter(elem => elem.owner == account)
        })
        .catch((err) => alert('Failure!!!', err));
}