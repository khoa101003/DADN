import axios from 'axios'

const URL = 'http://localhost:3030/api/record'

export const getPrivateRecord = async (garPiece) =>{
    return await axios.get(`${URL}/${garPiece}`)
        .then((res) => res.data)
        .catch((err) => alert('Failure!!!', err));
}