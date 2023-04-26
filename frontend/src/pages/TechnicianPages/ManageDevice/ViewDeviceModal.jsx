import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import read from "../assets/read.png";
import white_user from "../../../assets/user-white.png"

function ViewDeviceModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        // props.par.current.setAttribute("class", "text-muted");
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
            >
                <Modal.Header className="bg-success" closeButton>
                    <Modal.Title className="d-flex align-items-center text-white">
                        <img src={white_user} className="user-modal--user-icon me-2" />
                        Thông tin Thiết bị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row my-2">
                        <div className="col-6">
                            Tên thiết bị: {props.device.name}
                        </div>
                        <div className="col-6">
                            ID: {props.device.id}
                        </div>
                    </div>
                    <div className="my-3">
                        Ngày lắm đặt: {props.device.timeStart}
                    </div>
                    <div className="my-3">
                        Ngày bảo trì: {props.device.timeExpire}
                    </div>
                    <div className="my-3">
                        Chủ vườn: {props.device.owner}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ViewDeviceModal;