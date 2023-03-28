import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { MDBContainer } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import classNames from 'classnames/bind';

import styles from './Login.module.scss'

//component style
const LinkStyled1 = {
    color: "green",
    margin: "10%",
    alignSelf: "end"
}
const LinkStyled2 = {
    color: "green",
    margin: "10%",
    fontSize: "medium"
}

const inputStyled = {
    width: "90%"
}

const labelStyle = {
    fontSize: "medium"
}

const cx= classNames.bind(styles);

function Login(){
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        navigate('/')
    }
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

                            <p>Đăng nhập</p>

                            <div className={cx('login-form')}>
                                <Form className='d-flex align-items-center flex-column'>
                                    <Form.Group className="mb-3" controlId="username" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Tên đăng nhập</Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="type your username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Mật khẩu</Form.Label>
                                        <Form.Control size="lg" type="password" placeholder="type your password" />
                                    </Form.Group>
                                    <Link style={LinkStyled1} to='/pass-retri'>Quên mật khẩu?</Link>
                                    <Button variant="success" type="submit" className={cx('btn')} onClick={handleSubmit}>
                                        Đăng nhập
                                    </Button>
                                </Form>
                            </div>

                            <Link style={LinkStyled2} to='/register'>
                                Yêu cầu đăng ký tài khoản!
                            </Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;