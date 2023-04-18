import React, { useState } from 'react';
import { Button, Form, Modal} from 'react-bootstrap';
import write from '../../../assets/write.png'
import { updateSchedule } from '../../../api/schedule';
const EditSchedule = (props) => {
    const [show,setShow] = useState(false);
    const [schedule, setSchedule] = useState({...props.schedule});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleChangeTime = (e) => {
        setSchedule((sche)=>({
            ...sche,
            "time":e.target.value,
        }))
    }
    const handleChangeWater = (e) => {
        setSchedule((sche)=>({
            ...sche,
            "water":e.target.value,
        }))
    }
    const handleClick = () => {
        console.log(schedule)
        console.log(props.schedule._id)
        updateSchedule(props.schedule._id,schedule)
        setShow(false)
    }
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
                        <Form.Group onChange={handleChangeTime}>
                            <Form.Label>Time</Form.Label>
                            <Form.Control size="lg" type="time" />
                        </Form.Group>
                         <Form.Group onChange={handleChangeWater}>
                            <Form.Label>Lượng nước</Form.Label>
                            <Form.Control size="lg" type="number" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClick}>Lưu </Button>
                    <Button variant="secondary" onClick={()=>setShow(false)}>Thoát</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditSchedule;