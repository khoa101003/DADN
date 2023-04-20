import axios from 'axios'

const URL = 'http://localhost:3030/api/device'
export const getDeviceList = async (account) => {
    return await axios.get(`${URL}`)
        .then((res) => {
            return res.data.filter(elem => elem.owner == account)
        })
        .catch((err) => alert('Failure!!!', err));
}

export const postUserInput = async (props) => {
    return await axios.post(`${URL}`, props).then((res)=>{console.log('Thêm thành công')}).catch((err) =>console.log(err));;
}