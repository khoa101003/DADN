import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'
import { MDBContainer } from "mdb-react-ui-kit";
import classNames from 'classnames/bind';

import styles from './Register.module.scss'

//component style
const inputStyled = {
    width: "90%"
}

const btnStyled = {
    width: "45%"
}

const cx= classNames.bind(styles);

function Register(){
    return(
        <div className={cx('wrapped')}>
            <Container>
            <Alert variant="info" show={false} dismissible>
                <Alert.Heading>Gửi đăng ký thành công</Alert.Heading>
                <p>
                    Yêu cầu của bạn đã được ghi nhận. 
                    Công ty sẽ liên hệ với bạn sớm nhất có thể!
                </p>
            </Alert>
                <Row className='justify-content-center'>
                    <Col xs='6' className='my-5'>
                        <div className={cx('main')}>
                            <MDBContainer className="mt-5 mb-1 d-flex justify-content-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2870/2870875.png"
                                    className="rounded-circle shadow-4"
                                    style={{ width: "150px" }}
                                    alt="Avatar"
                                />
                            </MDBContainer>

                            <hr />

                            <p>Yêu cầu tạo tài khoản khu vườn</p>

                            <div className={cx('login-form')}>
                                <Form className='d-flex align-items-center flex-column mb-5'>
                                    <Form.Group className="mb-3" controlId="email" style={inputStyled}>
                                        <Form.Label>Nhập địa chỉ email</Form.Label>
                                        <Form.Control type="text" placeholder="type your email address" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="phonenum" style={inputStyled}>
                                        <Form.Label>Nhập số điện thoại</Form.Label>
                                        <Form.Control type="text" placeholder="type your phone number" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="username" style={inputStyled}>
                                        <Form.Label>Tên đăng nhập</Form.Label>
                                        <Form.Control type="text" placeholder="type your username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password" style={inputStyled}>
                                        <Form.Label>Mật khẩu</Form.Label>
                                        <Form.Control type="password" placeholder="type your password" />
                                    </Form.Group>
                                    
                                    <div className={cx('btn')}>
                                        <Button variant="success" type="submit" style={btnStyled}>
                                            Gửi yêu cầu
                                        </Button>

                                        <Button variant="danger" type="submit" style={btnStyled}>
                                            Hủy
                                        </Button>
                                    </div>
                                </Form>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register;