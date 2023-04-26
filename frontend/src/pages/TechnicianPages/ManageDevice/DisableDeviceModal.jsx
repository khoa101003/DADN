import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import disable from "../../../assets/disable.png";
import user from '../../../assets/user.png';

function DisableDeviceModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleDisableRequest() {

    }
    return (
        <>
            <Button variant="warning" onClick={handleShow} className="mx-2">
                <img src={disable} />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header className="bg-warning" closeButton>
                    <Modal.Title className="d-flex align-items-center">
                        <img src={user} className="user-modal--user-icon me-2" />
                        Vô hiệu hóa thiết bị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Thiết bị của khách hàng sẽ bị vô hiệu hóa. Bạn có muốn vô hiệu hóa tài khoản không ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleDisableRequest} size="lg">
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

export default DisableDeviceModal;