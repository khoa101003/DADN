import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import del from "../../../assets/delete.png";
import white_request from "../../../assets/request-white.png";

function DeleteUserModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleDeleteRequest() {

    }
    return (
        <>
            <Button variant="danger" onClick={handleShow} className="mx-2">
                <img src={del} />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title className="d-flex align-items-center text-white">
                        <img src={white_request} className="me-2" />
                        Ẩn yêu cầu của khách hàng
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Bạn đã đọc yêu cầu này của khách hàng, bạn có muốn ẩn 
                        yêu cầu này không ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDeleteRequest} size="lg">
                        Xác nhận
                    </Button>
                    <Button variant="secondary" onClick={handleClose} size="lg">
                        Thoát
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteUserModal;