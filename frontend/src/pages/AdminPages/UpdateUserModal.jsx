import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import white_user from "../../assets/user-white.png"
import write from "../../assets/write.png";

function UpdateUserModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleUpdateUser() {

    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mx-2">
                <img src={write} />
            </Button>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header className="bg-primary" closeButton>
                    <Modal.Title className="d-flex align-items-center text-white">
                        <img src={white_user} className="user-modal--user-icon me-2" />
                        Cập nhật thông tin
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex my-3 align-items-center">
                        Tên tài khoản:
                        <input
                            type="text"
                            className="form-control w-50 mx-3"
                            placeholder="abcder123"
                            defaultValue={props.user.account}
                        />
                    </div>
                    <div className="d-flex my-3 align-items-center">
                        Mật khẩu:
                        <input
                            type="password"
                            className="form-control w-50 mx-3"
                            min={8}
                            max={20}
                            defaultValue={props.user.password}
                        />
                    </div>
                    <div className="d-flex my-3 align-items-center">
                        Số điện thoại:
                        <input
                            type="tel"
                            className="form-control w-50 mx-3"
                            placeholder="0123456789"
                            defaultValue={props.user.phone}
                        />
                    </div>
                    <div className="my-3" readOnly>
                        Tên khách hàng: {props.user.name}
                    </div>
                    <div className="d-flex my-3 align-items-center">
                        Địa chỉ:
                        <input
                            type="text"
                            className="form-control w-75 mx-3"
                            placeholder="Your home address"
                            defaultValue={props.user.address}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdateUser} size="lg">
                        Cập nhật
                    </Button>
                    <Button variant="secondary" onClick={handleClose} size="lg">
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateUserModal;