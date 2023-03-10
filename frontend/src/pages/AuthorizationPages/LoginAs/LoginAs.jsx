import { Container, Row, Col, Button } from 'react-bootstrap'
import { MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';

import styles from './LoginAs.module.scss'

//component style
const LinkStyled = {
    color: "green",
    margin: "10%"
}

const cx= classNames.bind(styles);

function LoginAs(){
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

                            <p>Đăng nhập với tư cách:</p>

                            <div className={cx('options')}>
                                <Button variant="outline-success" size='' className={cx('btn')}>
                                    Khách hàng
                                </Button>
                                <Button variant="outline-success" className={cx('btn')}>
                                    Kỹ thuật viên
                                </Button>
                                <Button variant="outline-success" className={cx('btn')}>
                                    Quản trị viên
                                </Button>
                            </div>

                            <Link style={LinkStyled}>
                                Yêu cầu đăng ký tài khoản!
                            </Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginAs;