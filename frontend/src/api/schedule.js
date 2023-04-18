import axios from 'axios';

let URL = 'http://localhost:3030/api/schedulee';
export const postSchedule = async (props) =>{
    return await axios.post(`${URL}`, props).then((res)=>{alert('Thêm thành công')}).catch((err) =>console.log(err));;
}

// console.log(URL)
export const getListSchedule = async () => {
    return await axios.get(`${URL}/listSchedule`).then((res) => res.data).catch((err) => console.log(err))
}

export const deleteScheduleById = async (id) => {
    return await axios.delete(`${URL}/${id}`)
}

export const updateSchedule = async (id,sche) => {
    return await axios.post(`${URL}/${id}`,sche)
}
