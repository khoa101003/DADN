import classnames from 'classnames/bind'
import styles from './InputValue.module.scss'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SideBar from '../../../components/GlobalStyles/SideBar';
import { useState } from 'react';
import { postUserInput } from '../../../api/userInput';
const cx = classnames.bind(styles);

const InputValue = () => {
    const [data,setData] = useState({
        minTemp:"",
        maxTemp:"",
        soil:"",
        maxSoil:""
    });
    const handleMinTemp = (e) => {
        setData((value) => ({
            ...value,
            minTemp:e.target.value
        }))
    }
    const handleMaxTemp = (e) => {
        setData((value) => ({
            ...value,
            maxTemp:e.target.value
        }))
    }
    const handleSoil = (e) => {
        setData((value) => ({
            ...value,
            soil:e.target.value
        }))
    }
    const handleMaxSoil = (e) => {
        setData((value) => ({
            ...value,
            maxSoil:e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        postUserInput(data)
    }
    return (
        <Container>
        <Row>
            <SideBar />
            <Col xs='9'>
                <h1 className={cx('title')}>Thiết lập ngưỡng giá trị</h1>
                <div className={cx('input-form')}>
                    <Form>
                        <Form.Group className="py-3 px-3" controlId="minTemp" onChange={handleMinTemp}>
                            <Form.Label>Nhiệt độ tối thiểu</Form.Label>
                            <Form.Control type="number"  defaultValue={data.minTemp}/>                      
                        </Form.Group>

                        <Form.Group className="py-3 px-3" controlId="maxTemp" onChange={handleMaxTemp}>
                            <Form.Label>Nhiệt độ tối đa</Form.Label>
                            <Form.Control type="number" defaultValue={data.maxTemp}/>                      
                        </Form.Group>

                        <Form.Group className="py-3 px-3" controlId="soil" onChange={handleSoil}>
                            <Form.Label>Độ ẩm đất cần duy trì</Form.Label>
                            <Form.Control type="number" defaultValue={data.soil}/>                      
                        </Form.Group>

                        <Form.Group className="py-3 px-3" controlId="maxSoil" onChange={handleMaxSoil}>
                            <Form.Label>Độ ẩm đất tối đa</Form.Label>
                            <Form.Control type="number" defaultValue={data.maxSoil}/>                      
                        </Form.Group>
                        <div className='text-center mb-2'>
                                <Button className={cx('button')} variant="success" type="submit" onClick={handleSubmit}>Lưu</Button>
                        </div>
s                    </Form>
                </div>

            </Col>
        </Row>
            
        </Container>

    );
};

export default InputValue;