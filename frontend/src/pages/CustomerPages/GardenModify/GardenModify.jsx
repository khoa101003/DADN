import classnames from 'classnames/bind'
import styles from './GardenModify.module.scss'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../../../components/GlobalStyles/SideBar';

const cx = classnames.bind(styles);

//component style
const ButtonStyled = {
    width: "100%"
}
const labelStyle = {
    fontSize: "medium"
}

function GardenModify(){
    const [soil, setSoil] = useState(5)
    const [light, setLight] = useState(5)
    const [air, setAir] = useState(5)
    const [temp, setTemp] = useState(5)
    const [pump, setPump] = useState(3)
    return(
        <Container className='justify-content-center'>
            <Row>
                <SideBar />
                <Col xs='9'>
                    
                    <Form className='mt-5'>
                        <Form.Group as={Row} className="mb-3" controlId="gname">
                            <Form.Label column xs='2' style={labelStyle}>Tên mảnh vườn:</Form.Label>
                            <Col xs='10'>
                                <Form.Control size='lg' type="text" placeholder="" defaultValue={"Mảnh vườn A"} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="area">
                            <Form.Label column xs='2' style={labelStyle}>Diện tích:</Form.Label>
                            <Col xs='10'>
                                <Form.Control size='lg' type="text" placeholder="" defaultValue={"300 hecta"} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="location">
                            <Form.Label column xs='2' style={labelStyle}>Vị trí:</Form.Label>
                            <Col xs='10'>
                                <Form.Control size='lg' type="text" placeholder="" defaultValue={"36A đường plapla"} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="type">
                            <Form.Label column xs='2' style={labelStyle}>Loại cây trồng:</Form.Label>
                            <Col xs='10'>
                                <Form.Control size='lg' type="text" placeholder="" defaultValue={"Dừa sáp"} />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group className="mb-5" controlId="spec-req">
                            <Form.Label style={labelStyle}>Yêu cầu đặc biệt (không bắt buộc)</Form.Label>
                            <Form.Control size='lg' as="textarea" rows={6} />
                        </Form.Group>

                        <Row>
                            <Col xs='5' className='my-2'>
                                <div className={cx('sensor')}>
                                    <p className={cx('num-sensor')}>Số cảm biến độ ẩm đất: </p>
                                    <Button variant="light" onClick={() =>setSoil(soil+1)}>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </Button>
                                    
                                    <Form.Group controlId="type">
                                        <Form.Control type="text" className={cx('number')} value={soil}></Form.Control>
                                    </Form.Group>

                                    <Button variant="light" onClick={() =>setSoil(soil-1)}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Button>
                                </div>
                            </Col>

                            <Col xs={{span: 5, offset: 2}} className='my-2'>
                                <div className={cx('sensor')}>
                                    <p className={cx('num-sensor')}>Số cảm biến ánh sáng: </p>
                                    <Button variant="light" onClick={()=>setLight(light+1)}>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </Button>
                                    
                                    <Form.Group controlId="type">
                                        <Form.Control type="text" className={cx('number')} value={light}></Form.Control>
                                    </Form.Group>

                                    <Button variant="light" onClick={()=>setLight(light-1)}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Button>
                                </div>
                            </Col>

                            <Col xs='5' className='my-2'>
                                <div className={cx('sensor')}>
                                    <p className={cx('num-sensor')}>Số cảm biến độ ẩm không khí: </p>
                                    <Button variant="light" onClick={()=>setAir(air+1)}>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </Button>
                                    
                                    <Form.Group controlId="type">
                                        <Form.Control type="text" className={cx('number')} value={air}></Form.Control>
                                    </Form.Group>

                                    <Button variant="light" onClick={()=>setAir(air-1)}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Button>
                                </div>
                            </Col>

                            <Col xs={{span: 5, offset: 2}} className='my-2'>
                                <div className={cx('sensor')}>
                                    <p className={cx('num-sensor')}>Số cảm biến nhiệt độ: </p>
                                    <Button variant="light" onClick={()=>setTemp(temp+1)}>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </Button>
                                    
                                    <Form.Group controlId="type">
                                        <Form.Control type="text" className={cx('number')} value={temp}></Form.Control>
                                    </Form.Group>

                                    <Button variant="light" onClick={()=>setTemp(temp-1)}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Button>
                                </div>
                            </Col>

                            <Col xs={{span: 5, offset: 3}} className='my-2'>
                                <div className={cx('sensor')}>
                                    <p className={cx('num-sensor')}>Số máy bơm: </p>
                                    <Button variant="light" onClick={()=>setPump(pump+1)}>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </Button>
                                    
                                    <Form.Group controlId="type">
                                        <Form.Control type="text" className={cx('number')} value={pump}></Form.Control>
                                    </Form.Group>

                                    <Button variant="light" onClick={()=>setPump(pump-1)}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                        <Row className='mt-5'>
                            <Col xs={{span: 2, offset: 3}}>
                                <Button variant="danger" style={ButtonStyled}>
                                    Hủy
                                </Button>
                            </Col>
                            <Col xs={{span: 2, offset: 2}}>
                                <Button variant="warning" style={ButtonStyled}>
                                    Gửi
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    
                </Col>
            </Row>
        </Container>
    )
}

export default GardenModify;