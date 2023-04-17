import search from "../../../assets/search.png";
import data from "../userData.js";
import { getUserList } from "../../../api/userApi"
import UserRow from "./UserRow";
import AddUser from "./AddUser";
import Pagination from "../Pagination";
import SideBar from "../../../components/GlobalStyles/AdminSideBar";
import "../Admin.css";
import { useState, useEffect } from 'react';
function ManageUser() {
    const [users, setUsers] = useState([])
    const loadData = async () => {
        try {
            let userData = await getUserList()
            userData = userData.filter(user => user.role == 'customer')
            setUsers(userData)
            console.log(users)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    const userList = data.map(user => <UserRow key={user.id} user={user} />)
    return (
        <div className="row mx-auto container">
            <SideBar />
            <div className="col-xl-9 col-md-9 mt-5 mx-auto px-5">
                <h1 className="text-center fw-bold">Quản lý khách hàng</h1>
                <div className="row my-5">
                    <div className="col-6 add-user">
                        {/* <button type="button" className="btn btn-dark btn-lg">Thêm khách hàng</button> */}
                        < AddUser />
                    </div>
                    <div className="col-6 search-user">
                        <input type="text" className="form-control w-50" placeholder="Nhập số điện thoại hoặc tên tài khoản"></input>
                    </div>
                </div>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Tên khách hàng</th>
                            <th scope="col">Tên tài khoản</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col" className="text-center">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="ms-5">
                        {userList}
                    </tbody>
                </table>
                < Pagination />
            </div>
        </div>

    );
}

export default ManageUser;