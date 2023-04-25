import classnames from 'classnames/bind'
import styles from './GardenModify.module.scss'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../../../components/GlobalStyles/SideBar';

import { modifyGardenRequest } from '../../../api/requestApi';
import { getUserbyAccount } from '../../../api/userApi';
import { getPieceById } from '../../../api/garden_pieceApi'

const cx = classnames.bind(styles);

//component style
const ButtonStyled = {
    width: "100%"
}
const labelStyle = {
    // fontSize: "medium"
}

function GardenModify(){
    const params = useParams()

    const navigate = useNavigate()

    const [soil, setSoil] = useState(1)
    const [light, setLight] = useState(1)
    const [air, setAir] = useState(1)
    const [temp, setTemp] = useState(1)
    const [pump, setPump] = useState(1)
    
    const [name, setName] = useState('')
    const [area, setArea] = useState()
    const [location, setLocation] = useState('')
    const [type, setType] = useState('')
    const [special, setSpecial] = useState('')

    const [detail,setDetail] = useState()

    const [user,setUser] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault();
        let text = "Ấn xác nhận để gửi yêu cầu";
        if (confirm(text) == true) {
            const data = {
                sender: user.name,
                device: [
                    {
                        name: 'Do am',
                        quantity: air
                    },

                    {
                        name: 'maybom',
                        quantity: pump
                    },

                    {
                        name: 'Nhiet do',
                        quantity: temp
                    },

                    {
                        name: 'Do am dat',
                        quantity: soil
                    },

                    {
                        name: 'Anh sang',
                        quantity: light
                    }
                ],
                registerGarden:
                {
                    name: name,
                    type: type, // Loai cay trong
                    location: location,
                    owner: user.account,
                    area: area,
                    special: special
                }

            }

            const x = modifyGardenRequest(data);
            if(x){
                alert('Gửi yêu cầu thành công')
                navigate(`/${params.account}`)
            }
            else{
                alert('Gửi yêu cầu thất bại')
            }
        }
    }
    
    const loadData = async()=>{
        return await getUserbyAccount(params.account).then(res=>setUser(res))
    }
    const loadData1 = async () =>{
        return await getPieceById(params.id).then((res)=>setDetail(res[0]))
    }

    useEffect(()=>{
        loadData()
        loadData1()
    },[])

    useEffect(()=>{
        if(detail !=null){

            setName(detail.name)
            setArea(detail.area)
            setLocation(detail.location)
            setType(detail.type)
        }
    },[detail])

    return(
        <>
        {detail &&
        <Container className='justify-content-center'>
            <Row>
                <SideBar position="garden" account={params.account}/>
                <Col xs='9'>
                    
                    <Form className='mt-5' onSubmit={e=>handleSubmit(e)}>
                        <Form.Group as={Row} className="mb-3" controlId="gname">
                            <Form.Label column xs='2' style={labelStyle}>Tên mảnh vườn:</Form.Label>
                            <Col xs='10'>
                                <Form.Control  type="text"  defaultValue={detail.name} onChange={e=> setName(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="area">
                            <Form.Label column xs='2' style={labelStyle}>Diện tích (hecta):</Form.Label>
                            <Col xs='10'>
                                <Form.Control  type="text" defaultValue={detail.area} onChange={e=> setArea(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="location">
                            <Form.Label column xs='2' style={labelStyle}>Vị trí:</Form.Label>
                            <Col xs='10'>
                                <Form.Control  type="text" defaultValue={detail.location} onChange={e=> setLocation(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="type">
                            <Form.Label column xs='2' style={labelStyle}>Loại cây trồng:</Form.Label>
                            <Col xs='10'>
                                <Form.Control  type="text" defaultValue={detail.type} onChange={e=> setType(e.target.value)} />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group className="mb-5" controlId="spec-req">
                            <Form.Label style={labelStyle}>Yêu cầu đặc biệt (không bắt buộc)</Form.Label>
                            <Form.Control  as="textarea" rows={3} onChange={e=> setSpecial(e.target.value)} />
                        </Form.Group>

                        <Row>
                            <Col xs='5' className='my-2'>
                                <div className={cx('sensor')}>
                                    <p className={cx('num-sensor')}>Số cảm biến độ ẩm đất: </p>
                                    <Button variant="light" onClick={() =>setSoil(soil+1)}>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </Button>
                                    
                                    <Form.Group controlId="type">
                                        <Form.Control type="text" className={cx('number')} value={soil} onChange={e=>setSoil(e.target.value)}></Form.Control>
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
                                        <Form.Control type="text" className={cx('number')} value={light} onChange={e=>setLight(e.target.value)}></Form.Control>
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
                                        <Form.Control type="text" className={cx('number')} value={air} onChange={e=>setAir(e.target.value)}></Form.Control>
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
                                        <Form.Control type="text" className={cx('number')} value={temp} onChange={e=>setTemp(e.target.value)}></Form.Control>
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
                                        <Form.Control type="text" className={cx('number')} value={pump} onChange={e=>setPump(e.target.value)}></Form.Control>
                                    </Form.Group>

                                    <Button variant="light" onClick={()=>setPump(pump-1)} >
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                        <Row className='mt-5'>
                            <Col xs={{span: 2, offset: 3}}>
                                <Button variant="danger" style={ButtonStyled} href={`/${params.account}`}>
                                    Hủy
                                </Button>
                            </Col>
                            <Col xs={{span: 2, offset: 2}}>
                                <Button type='submit' variant="warning" style={ButtonStyled}>
                                    Gửi
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </Col>
            </Row>
        </Container>
        }</>
    )
}

export default GardenModify;