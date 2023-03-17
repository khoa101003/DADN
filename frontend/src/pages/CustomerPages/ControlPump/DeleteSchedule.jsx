import { useState } from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";
import del from "../../../assets/delete.png"

const DeleteSchedule = () => {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} variant="danger">
                <img src={del} alt="Xóa"/>
            </Button>
            <Modal show = {show} onHide={handleClose} centered>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title>Xóa lịch tưới</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <h4>Bạn có muốn xóa lịch tưới ?</h4>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="danger">Xóa</Button>
                    <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteSchedule;