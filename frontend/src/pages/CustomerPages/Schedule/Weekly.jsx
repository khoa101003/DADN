import axios from 'axios';
import { MDBBtnGroup, MDBCheckbox } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Modal } from 'react-bootstrap';

const Weekly = (props) => {
    const [day,setDay] = useState({
        "Mon":false,
        "Tue":false,
        "Wed":false,
        "Thu":false,
        "Fri":false,
        "Sat":false,
        "Sun":false
    });
    const [show,setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
 
        setDay(day => ({
            ...day,
            [e.target.value]:!day[newValue]
        }))
    }
    const handleSubmit = () => {
        props.onChange(day);
        setShow(false);
    }
    const handleCancel = () => {
        setDay({
        "Mon":false,
        "Tue":false,
        "Wed":false,
        "Thu":false,
        "Fri":false,
        "Sat":false,
        "Sun":false});
    }
    return (
        <>
            <div className="d-grid gap-2">
                <Button variant="light" size="lg" onClick={handleShow}>Hàng tuần</Button>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton><p>Lịch tưới theo tuần</p></Modal.Header>
                <Modal.Body>   
                    <MDBCheckbox checked={day.Mon} name='flexCheck' value='Mon' id='flexCheckDefault'  onChange={handleChange} label='Thứ hai' />
                    <MDBCheckbox checked={day.Tue} name='flexCheck' value='Tue' id='flexCheckChecked1' onChange={handleChange} label='Thứ ba' />
                    <MDBCheckbox checked={day.Wed} name='flexCheck' value='Wed' id='flexCheckChecked2' onChange={handleChange} label='Thứ tư' />
                    <MDBCheckbox checked={day.Thu} name='flexCheck' value='Thu' id='flexCheckChecked3' onChange={handleChange} label='Thứ năm' />
                    <MDBCheckbox checked={day.Fri} name='flexCheck' value='Fri' id='flexCheckChecked4' onChange={handleChange} label='Thứ sáu' />
                    <MDBCheckbox checked={day.Sat} name='flexCheck' value='Sat' id='flexCheckChecked5' onChange={handleChange} label='Thứ bảy' />
                    <MDBCheckbox checked={day.Sun} name='flexCheck' value='Sun' id='flexCheckChecked6' onChange={handleChange} label='Chủ nhật' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCancel}>Đặt lại</Button>   
                    <Button onClick={handleSubmit}>Lưu</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Weekly;