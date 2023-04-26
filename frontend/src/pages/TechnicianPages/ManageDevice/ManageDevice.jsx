import { Button, Container, Row, Col } from 'react-bootstrap';
import SideBar from '../SideBar';
import classnames from 'classnames/bind'

import data from "../deviceData.js";
import DeviceRow from "./DeviceRow";
import Pagination from "./Pagination";

import { useNavigate, useParams } from 'react-router-dom';
import AddSensor from "./AddSensor"
function ManageDevice() {
    const params = useParams()
    let device_type = params.device_type
    if (device_type == "light")
        device_type = "Cảm biến ánh sáng"
    else if (device_type == "temp")
        device_type = "Cảm biến nhiệt độ"
    else if (device_type == "soil")
        device_type = "Cảm biến độ ẩm đất"
    else if (device_type == "air")
        device_type = "Cảm biến độ ẩm không khí"
    else if (device_type == "led")
        device_type = "Đèn cảnh báo"
    else
        device_type = "Máy bơm"

    const deviceList = data.map(device => <DeviceRow key={device.type} device={device} />)
    return (

                    <div className="row">
                        <div className="left col-2"></div>
                        <div className="col-8 mx-auto px-5">
                            <div className='fs-2 text-center mt-5'>{params.account}/Mảnh vườn {params.gar_id}/{device_type}</div>
                            <div className='row my-5'>
                                {/* <div className='col-6 text-center my-auto'>Số lượng: 10</div> */}
                                <div className='col-6 text-center my-auto'></div>
                                <div className='col-6 text-center'><AddSensor /></div>
                            </div>
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col"><i>ID</i></th>
                                        <th scope="col"><i>Tên</i></th>
                                        <th scope="col"><i>Ngày lắp đặt</i></th>
                                        <th scope="col"><i>Ngày bảo trì</i></th>
                                        <th scope="col"><i>Trạng thái</i></th>
                                        <th scope="col" className="text-center"><i>Thao tác</i></th>
                                    </tr>
                                </thead>
                                <tbody className="ms-5">
                                    {deviceList}
                                </tbody>
                            </table>
                            < Pagination />
                        </div>
                        <div className="right col-2"></div>
                    </div>


    )
}

export default ManageDevice