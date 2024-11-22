import axios from 'axios'

const URL = 'http://localhost:3030/api/home'
export const getHomeList = async () =>{
    return await axios.get(`${URL}`)
        .then((res) => res.data)
        .catch((err) => alert('Failure!!!', err));
}