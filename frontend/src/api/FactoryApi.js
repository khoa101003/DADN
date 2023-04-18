import axios from 'axios'

const URL = 'http://localhost:3030/api/factory'

export const generateDevice = async (owner, type) => {
    return await axios.get(`${URL}/${owner}/${type}`)
        .then((res) => res.data)
        .catch((err) => alert('Failure!!!', err));
}