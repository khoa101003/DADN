import axios from 'axios'

const URL = 'http://localhost:3030/api/request'

export const registerGardenRequest = async (props) =>{
    return await axios.post(`${URL}/regis-gar`, props)
        .then((res) => true)
        .catch((err) => alert('Failure!!!', err));
}

export const modifyGardenRequest = async (props) =>{
    return await axios.post(`${URL}/modify-gar`, props)
        .then((res) => true)
        .catch((err) => alert('Failure!!!', err));
}
