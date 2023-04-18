import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function AddSensor() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleAddRequest() {

    }
    return (
        <>
            <Button variant="dark" onClick={handleShow} className="btn-lg mx-2">
                Thêm khách hàng
            </Button>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title className="d-flex align-items-center text-white">
                        Thêm thiết bị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex my-3 align-items-center">
                        Tên thiết bị:
                        <input
                            type="text"
                            className="form-control w-50 mx-3"
                            placeholder="Cảm biến CDS - NVZ1"
                        />
                    </div>
                    <div className="d-flex my-3 align-items-center">
                        Loại thiết bị:
                        <select className="form-select w-25 ms-3">
                            <option selected>Open this select menu</option>
                            <option value="light">Sensor ánh sáng</option>
                            <option value="soil">Sensor độ ẩm đất</option>
                            <option value="air">Sensor độ ẩm không khí</option>
                            <option value="led">Đèn cảnh báo</option>
                            <option value="pump">Máy bơm</option>
                        </select>
                        {/* <input
                            type="text"
                            className="form-control w-50 mx-3"
                            placeholder="Quang trở"
                        /> */}
                    </div>
                    <div className="d-flex my-3 align-items-center">
                        Khối lượng
                        <input
                            type="text"
                            className="form-control w-50 mx-3"
                            plac
                        />
                    </div>
                    <div className="d-flex my-3 align-items-center">
                        Nhập lại mật khẩu:
                        <input
                            type="password"
                            className="form-control w-50 mx-3"
                            min={8}
                            max={20}
                        />
                    </div>
                    <div className="d-flex my-3 align-items-center">
                        Số điện thoại:
                        <input
                            type="tel"
                            className="form-control w-50 mx-3"
                            placeholder="0238647256"
                        />
                    </div>

                    <div className="d-flex my-3 align-items-center">
                        Địa chỉ:
                        <input
                            type="text"
                            className="form-control w-75 mx-3"
                            placeholder=" 268, Lý Thường Kiệt. P. 14, Q. 10"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleAddRequest} size="lg">
                        Xác nhận
                    </Button>
                    <Button variant="secondary" onClick={handleClose} size="lg">
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddSensor;