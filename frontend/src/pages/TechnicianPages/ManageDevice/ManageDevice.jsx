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
    return (
        <div className="row">
            <div className="left col-2"></div>
            <div className="col-8">
                <div className='fs-2 text-center mt-5'>{params.account}/Mảnh vườn {params.gar_id}/{device_type}</div>
                <div className='row my-5'>
                    <div className='col-6 text-center my-auto'>Số lượng: 10</div>
                    <div className='col-6 text-center'><AddSensor /></div>
                </div>
            </div>
            <div className="right col-2"></div>
        </div>
    )
}

export default ManageDevice