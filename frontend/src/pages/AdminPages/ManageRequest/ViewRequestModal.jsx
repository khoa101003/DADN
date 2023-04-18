import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import read from "../../../assets/read.png";
import white_request from "../../../assets/request-white.png";

function ViewRequestModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        props.par.current.setAttribute("class", "text-muted");
    } 
    function handleAcceptRequest() {

    }
    return (
        <>
            <Button variant="success" onClick={handleShow} className="mx-2">
                <img src={read} />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
                size="lg"
            >
                <Modal.Header className="bg-success" closeButton>
                    <Modal.Title className="d-flex align-items-center text-white">
                        <img src={white_request} className="me-2" />
                        {props.request.content}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="my-3">
                        Tên mảnh vườn: {props.request.detail.name}
                    </div>
                    <div className="my-3">
                        Diện tích: {props.request.detail.area}
                    </div>
                    <div className="my-3">
                        Vị trí: {props.request.detail.location}
                    </div>
                    <div className="my-3">
                        Loại cây trồng: {props.request.detail.type}
                    </div>
                    <div className="row">
                        <div className="col-5">
                            Cảm biến độ ẩm đất:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.soil}
                        </div>
                        <div className="col-5">
                            Cảm biến ánh sáng:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.light}
                        </div>
                        <div className="col-5">
                            Cảm biến độ ẩm không khí:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.air}
                        </div>
                        <div className="col-5">
                            Cảm biến nhiệt độ:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.temp}
                        </div>
                        <div className="col-5">
                            Máy bơm:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.pump}
                        </div>
                        <div className="col-5">
                            Đèn cảnh báo:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.light}
                        </div>
                        <hr className="w-75 mx-auto my-4" />
                        <div className="fw-bold">
                            Ghi chú của khách hàng:
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleAcceptRequest} size="lg">
                        Xác nhận
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewRequestModal;