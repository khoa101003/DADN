import axios from 'axios';

let URL = 'http://localhost:3030/api/schedulee';
export const postSchedule = async (props) =>{
    console.log(props)
    console.log("aaaaaaaaaaaaaaaaaaaaaaa")
    return await axios.post(`${URL}`, props).then((res)=>{alert('Thêm thành công')}).catch((err) =>console.log(err));;
}

// console.log(URL)
export const getListSchedule = async () => {
    return await axios.get(URL+"/listSchedule").then((res) => res.data).catch((err) => console.log(err))
}