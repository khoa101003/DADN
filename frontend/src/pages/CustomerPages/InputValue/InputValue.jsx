import classnames from 'classnames/bind'
import styles from './InputValue.module.scss'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const cx = classnames.bind(styles);

const data = {
    minTemp:"25",
    maxTemp:"35",
    soil:"30",
    maxSoil:"40"
};

const InputValue = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <Container>
        <Row>
            <Col xs='2'>
                <div className={cx('nav')}>

                </div>
            </Col>
            <Col xs='10'>
                <h1 className={cx('title')}>Thiết lập ngưỡng giá trị</h1>
                <div className={cx('input-form')}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="py-3 px-3" controlId="minTemp">
                            <Form.Label>Nhiệt độ tối thiểu</Form.Label>
                            <Form.Control type="number"  defaultValue={data.minTemp}/>                      
                        </Form.Group>

                        <Form.Group className="py-3 px-3" controlId="maxTemp">
                            <Form.Label>Nhiệt độ tối đa</Form.Label>
                            <Form.Control type="number" defaultValue={data.maxTemp}/>                      
                        </Form.Group>

                        <Form.Group className="py-3 px-3" controlId="soil">
                            <Form.Label>Độ ẩm đất cần duy trì</Form.Label>
                            <Form.Control type="number" defaultValue={data.soil}/>                      
                        </Form.Group>

                        <Form.Group className="py-3 px-3" controlId="maxSoil">
                            <Form.Label>Độ ẩm đất tối đa</Form.Label>
                            <Form.Control type="number" defaultValue={data.maxSoil}/>                      
                        </Form.Group>
                        <div className='text-center mb-2'>
                            <Link to={{pathname:'/GardenDashboard'}}>
                                <Button className={cx('button')} variant="success" type="submit">Lưu</Button>
                            </Link> 
                        </div>
                        
                    </Form>
                </div>

            </Col>
        </Row>
            
        </Container>

    );
};

export default InputValue;