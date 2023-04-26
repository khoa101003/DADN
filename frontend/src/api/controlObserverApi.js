import axios from 'axios'

const URL = 'http://localhost:3030/api/controlObserver'
// export const getCurValue = async () => {
//     return await axios.get(`${URL}`).then(res => res.data).catch((err) => console.log(err))
// }

export const controlAutoPump = async (value) => {
    value = value?1:0
    console.log(`${URL}/controlAutoPump/${value}`)
    return await axios.get(`${URL}/controlAutoPump/${value}`).then((res) => res).catch((err) => console.log(err))
}