import axios from 'axios';

let URL = 'http://localhost:3030/api/userInput';
export const postUserInput = async (props) => {
    return await axios.post(`${URL}`, props).then((res)=>{console.log('Thêm thành công')}).catch((err) =>console.log(err));;
}
