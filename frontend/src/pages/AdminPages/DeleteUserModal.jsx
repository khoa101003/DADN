import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import del from "../../assets/delete.png";
import white_user from "../../assets/user-white.png";
function DeleteUserModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleDeleteUser() {

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
                        <img src={white_user} className="user-modal--user-icon me-2" />
                        Xóa tài khoản
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Tài khoản của bạn sẽ được xóa vĩnh viễn khỏi ứng dụng. Bạn có muốn xóa tài khoản không ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDeleteUser} size="lg">
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