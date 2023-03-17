import React, { useState } from 'react';
import { Button, Form, Modal} from 'react-bootstrap';
import write from '../../../assets/write.png'
const EditSchedule = (props) => {
    const schedule = props.schedule;
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow}>
                <img src={write} alt="Chỉnh sửa"/>
            </Button>
            <Modal show = {show} onHide={handleClose} centered>
                <Modal.Header className="bg-primary" closeButton>
                    <Modal.Title>Lịch tưới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Thời gian</Form.Label>
                            <Form.Control type='datetime-local' defaultValue={schedule.time}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lượng nước</Form.Label>
                            <Form.Control type='number' placeholder='ml' defaultValue={schedule.amount}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button >Lưu</Button>
                    <Button variant="secondary" onClick={()=>setShow(false)}>Thoát</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditSchedule;