import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'
import { MDBContainer } from "mdb-react-ui-kit";
import classNames from 'classnames/bind';

import styles from './Register.module.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserList,postRegisterRequest } from '../../../api/userApi';

//component style
const inputStyled = {
    width: "90%"
}

const btnStyled = {
    width: "45%"
}
const labelStyle = {
    fontSize: "medium"
}


const cx= classNames.bind(styles);

function Register(){
      
    //getUser
    const [users,setUsers] = useState([])
    const loadData = async ()=>{
        return await getUserList().then((res)=>setUsers(res))
    }
    //form data
    const [name,setName] = useState('');
    const [birth, setBirth] = useState('');
    const [address, setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('')
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    //navigate
    const navigate = useNavigate()

    useEffect(()=>{
        loadData()
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            name: name,
            date: birth,
            address: address,
            email: email,
            phone: phone,
            account: username,
            password: password
        }
        let dup = false
        const auth = users.filter((user)=>user.role === 'customer')
        if(auth.find(ad=>ad.account===username))
        {
            alert('Tên đăng nhập đã tồn tại')
            dup = true;
        }

        if(!dup && auth.find(ad=>ad.email===email)){
            alert('Email đã được sử dụng')
            dup = true;
        }

        if(!dup && auth.find(ad=>ad.phone===phone)){
            alert('Số điện thoại đã được sử dụng')
            dup = true;
        }

        if(!dup){
            const x = postRegisterRequest(data)
            if(x){
                alert('Đăng kí thành công')
                navigate('/login-as')
            }
        }    
    }
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
                                <Form className='d-flex align-items-center flex-column mb-5' onSubmit={e=>handleSubmit(e)}>
                                    <Form.Group className="mb-3" controlId="name" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Họ và tên:</Form.Label>
                                        <Form.Control  type="text" placeholder="type your fullname" 
                                        onChange={e=>setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="birth" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Ngày sinh:</Form.Label>
                                        <Form.Control  type="text" placeholder="type your birthday" 
                                        onChange={e=>setBirth(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="address" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Địa chỉ:</Form.Label>
                                        <Form.Control  type="text" placeholder="type your address" 
                                        onChange={e=>setAddress(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="email" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Nhập địa chỉ email</Form.Label>
                                        <Form.Control  type="text" placeholder="type your email address" 
                                        onChange={e=>setEmail(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="phonenum" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Nhập số điện thoại</Form.Label>
                                        <Form.Control  type="text" placeholder="type your phone number" 
                                        onChange={e=>setPhone(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="username" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Tên đăng nhập</Form.Label>
                                        <Form.Control  type="text" placeholder="type your username" 
                                        onChange={e=>setUsername(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password" style={inputStyled}>
                                        <Form.Label style={labelStyle}>Mật khẩu</Form.Label>
                                        <Form.Control  type="password" placeholder="type your password" 
                                        onChange={e=>setPassword(e.target.value)}/>
                                    </Form.Group>
                                    
                                    <div className={cx('btn')}>
                                        <Button variant="success" type="submit" style={btnStyled}>
                                            Gửi yêu cầu
                                        </Button>

                                        <Button variant="danger" style={btnStyled} href='/login-as'>
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