import classnames from 'classnames/bind'
import styles from './GardenDetail.module.scss'
import { Button, Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../../components/GlobalStyles/SideBar';
import { Link,useNavigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getPieceById } from '../../../api/garden_pieceApi';
import { getPrivateRecord } from '../../../api/recordApi';

const cx = classnames.bind(styles);

//component style
const ButtonStyled = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60px",
    fontSize: "25px",
}


function GardenDetail(){

    const [detail,setDetail] = useState()
    const [sensors,setSensors] = useState([])
    var lightSensor
    var airSensor 
    var soilSensor
    var tempSensor 

    const params = useParams()

    const loadData1 = async () =>{
        await getPieceById(params.id).then((res)=>{
            console.log("Result")
            console.log(res)
            setDetail(res[0])
        })
    }

    const loadData2 = async () =>{
        await getPrivateRecord(params.id).then((res)=>setSensors(res))
    }
    useEffect(()=>{
        loadData1()
        loadData2()
    },[])

    sensors.forEach((sensor)=>{
        if(sensor.type === 'Do am') airSensor = sensor
        if(sensor.type === 'Do am dat') soilSensor = sensor
        if(sensor.type === 'Nhiet do') tempSensor = sensor
        if(sensor.type === 'Anh sang') lightSensor = sensor
    })


    return(
        <>
        { detail && lightSensor && soilSensor && airSensor && tempSensor &&
        <Container className='justify-content-center'>
            <Row>
                <SideBar position="garden" account={params.account} />
                <Col xs='9'>
                    <h1 className={cx('title')}>{detail.name}</h1>
                    <div className={cx('sensor-val')}>

                        <Row>
                            <Col xs={{span: 3, offset: 1}} className="my-4">
                                <div className={cx('temp')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="red" d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874zM12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/></svg>
                                    <div className={cx('value-dis')}>
                                        <h3>Nhiệt độ</h3>
                                        <p>{tempSensor.curValue} &#8451;</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={{span: 4, offset: 3 }} className="my-4">
                                <div className={cx('soil')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 30 30"><path fill="brown" d="M7.56 17.19c0-.88.24-1.89.72-3.03s1.1-2.25 1.86-3.31c1.56-2.06 2.92-3.62 4.06-4.67l.75-.72c.25.26.53.5.83.72c.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03c0 1-.19 1.95-.58 2.86c-.39.91-.91 1.7-1.57 2.36c-.66.66-1.45 1.19-2.37 1.58c-.92.39-1.89.59-2.91.59c-1 0-1.95-.19-2.86-.57c-.91-.38-1.7-.89-2.36-1.55c-.66-.65-1.19-1.44-1.58-2.35s-.59-1.89-.59-2.93zm2.26-2.93c0 .83.17 1.49.52 1.99c.35.49.88.74 1.59.74c.72 0 1.25-.25 1.61-.74c.35-.49.53-1.15.54-1.99c-.01-.84-.19-1.5-.54-2c-.35-.49-.89-.74-1.61-.74c-.71 0-1.24.25-1.59.74c-.35.5-.52 1.16-.52 2zm1.57 0v-.35c0-.08.01-.19.02-.33s.02-.25.05-.32s.05-.16.09-.24c.04-.08.09-.15.15-.18c.07-.04.14-.06.23-.06c.14 0 .25.04.33.12s.14.21.17.38c.03.18.05.32.06.45s.01.3.01.52c0 .23 0 .4-.01.52s-.03.27-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12c-.09 0-.16-.02-.23-.06a.335.335 0 0 1-.15-.18c-.04-.08-.07-.17-.09-.24c-.02-.08-.04-.19-.05-.32c-.01-.14-.02-.25-.02-.32v-.34zm.59 7.75h1.32l4.99-10.74h-1.35l-4.96 10.74zm4.3-2.99c.01.84.2 1.5.55 2c.35.49.89.74 1.6.74c.72 0 1.25-.25 1.6-.74c.35-.49.52-1.16.53-2c-.01-.84-.18-1.5-.53-1.99c-.35-.49-.88-.74-1.6-.74c-.71 0-1.25.25-1.6.74c-.36.49-.54 1.15-.55 1.99zm1.57 0c0-.23 0-.4.01-.52s.03-.27.06-.45s.09-.3.17-.38s.19-.12.33-.12c.09 0 .17.02.24.06c.07.04.12.1.16.19c.04.09.07.17.1.24s.04.18.05.32l.01.32v.69l-.01.32l-.05.32l-.1.24l-.16.19l-.24.06c-.14 0-.25-.04-.33-.12s-.14-.21-.17-.38c-.03-.18-.05-.33-.06-.45s-.01-.3-.01-.53z"/></svg>
                                    <div className={cx('value-dis')}>
                                        <h3>Độ ẩm đất</h3>
                                        <p>{soilSensor.curValue}%</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={{span: 3, offset: 1}} className="my-4">
                                <div className={cx('light')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256"><path fill="yellow" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"/></svg>
                                    <div className={cx('value-dis')}>
                                        <h3>Ánh sáng</h3>
                                        <p>{lightSensor.curValue} lux</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={{span: 4, offset: 3 }} className="my-4">
                                <div className={cx('air')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 30 30"><path fill="blue" d="M7.56 17.19c0-.88.24-1.89.72-3.03s1.1-2.25 1.86-3.31c1.56-2.06 2.92-3.62 4.06-4.67l.75-.72c.25.26.53.5.83.72c.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03c0 1-.19 1.95-.58 2.86c-.39.91-.91 1.7-1.57 2.36c-.66.66-1.45 1.19-2.37 1.58c-.92.39-1.89.59-2.91.59c-1 0-1.95-.19-2.86-.57c-.91-.38-1.7-.89-2.36-1.55c-.66-.65-1.19-1.44-1.58-2.35s-.59-1.89-.59-2.93zm2.26-2.93c0 .83.17 1.49.52 1.99c.35.49.88.74 1.59.74c.72 0 1.25-.25 1.61-.74c.35-.49.53-1.15.54-1.99c-.01-.84-.19-1.5-.54-2c-.35-.49-.89-.74-1.61-.74c-.71 0-1.24.25-1.59.74c-.35.5-.52 1.16-.52 2zm1.57 0v-.35c0-.08.01-.19.02-.33s.02-.25.05-.32s.05-.16.09-.24c.04-.08.09-.15.15-.18c.07-.04.14-.06.23-.06c.14 0 .25.04.33.12s.14.21.17.38c.03.18.05.32.06.45s.01.3.01.52c0 .23 0 .4-.01.52s-.03.27-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12c-.09 0-.16-.02-.23-.06a.335.335 0 0 1-.15-.18c-.04-.08-.07-.17-.09-.24c-.02-.08-.04-.19-.05-.32c-.01-.14-.02-.25-.02-.32v-.34zm.59 7.75h1.32l4.99-10.74h-1.35l-4.96 10.74zm4.3-2.99c.01.84.2 1.5.55 2c.35.49.89.74 1.6.74c.72 0 1.25-.25 1.6-.74c.35-.49.52-1.16.53-2c-.01-.84-.18-1.5-.53-1.99c-.35-.49-.88-.74-1.6-.74c-.71 0-1.25.25-1.6.74c-.36.49-.54 1.15-.55 1.99zm1.57 0c0-.23 0-.4.01-.52s.03-.27.06-.45s.09-.3.17-.38s.19-.12.33-.12c.09 0 .17.02.24.06c.07.04.12.1.16.19c.04.09.07.17.1.24s.04.18.05.32l.01.32v.69l-.01.32l-.05.32l-.1.24l-.16.19l-.24.06c-.14 0-.25-.04-.33-.12s-.14-.21-.17-.38c-.03-.18-.05-.33-.06-.45s-.01-.3-.01-.53z"/></svg>
                                    <div className={cx('value-dis')}>
                                        <h3>Độ ẩm không khí</h3>
                                        <p>{airSensor.curValue}%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>


                    <Row className='my-5'>
                        <Col xs='4'>
                            <div className={cx('info')}>
                                <p>Loại cây trồng: {detail.type}</p>
                                <p>Diện tích: {detail.area} hecta</p>
                                <p>Vị trí: {detail.location}</p>
                                <p>Ngày bắt đầu: {detail.days}</p>
                            </div>
                        </Col>

                        <Col xs={{span:7, offset: 1}}>
                            <Row className={cx('control')}>
                                <Col xs='6'><Button variant="success" style={ButtonStyled} href='/SensorInfoPage'>Thông tin cảm biến</Button></Col>
                                <Col xs='6'><Button variant="success" style={ButtonStyled} href='/controlPump'>Quản lí tưới cây</Button></Col>
                                <Col xs='6'><Button variant="success" style={ButtonStyled} href='/SensorHistory'>Lịch sử hoạt động</Button></Col>
                                <Col xs='6'><Button variant="success" style={ButtonStyled} href='/GardenDashboard'>Giám sát khu vườn</Button></Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className={cx('edit-del')}>
                        <Row>
                            <Col xs={{span: 2, offset: 3}}>
                                <Button variant="primary" style={{width: "100%"}} href='/garden-mod'>Sửa thông tin</Button>
                            </Col>
                            <Col xs={{span: 2, offset: 1}}>
                                <Button variant="danger" style={{width: "100%"}}>Xóa</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>}
        </>
    )
}

export default GardenDetail;