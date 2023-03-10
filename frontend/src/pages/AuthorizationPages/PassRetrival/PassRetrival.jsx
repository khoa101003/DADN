import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { MDBContainer } from "mdb-react-ui-kit";
import classNames from 'classnames/bind';

import styles from './PassRetrival.module.scss'

//component style
const inputStyled = {
    width: "90%"
}

const cx= classNames.bind(styles);

function PassRetrival(){
    return(
        <div className={cx('wrapped')}>
            <Container>
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

                            <p>Lấy lại mật khẩu</p>

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

                                    <Button variant="success" type="submit" className={cx('btn')}>
                                        Lấy lại mật khẩu
                                    </Button>
                                </Form>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PassRetrival;