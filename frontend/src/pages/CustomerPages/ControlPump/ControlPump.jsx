import { useEffect, useState } from 'react';
import {Row, Col, Container, Button, ToggleButton, ButtonGroup} from 'react-bootstrap'
import SideBar from '../../../components/GlobalStyles/SideBar';
import RowSchedule from './RowSchedule';
import classnames from 'classnames/bind'
import styles from './ControlPump.module.scss'
import { switchPump } from '../../../api/controlPump';
import { Link } from 'react-router-dom';
import { getListSchedule } from '../../../api/schedule';

const cx = classnames.bind(styles);
const data = [
    {
        id:'1',
        time:'2023-03-16T19:41',
        date:'23/02/2023',
        amount:'1000'
    },
    {
        id:'2',
        time:'2023-03-16T19:41',
        date:'23/02/2023',
        amount:'1000'
    },
    {
        id:'3',
        time:'2023-03-16T19:41',
        date:'23/02/2023',
        amount:'1000'
    },
    {
        id:'4',
        time:'2023-03-16T19:41',
        date:'23/02/2023',
        amount:'1000'
    },
    {
        id:'5',
        time:'2023-03-16T19:41',
        date:'23/02/2023',
        amount:'1000'
    },
    {
        id:'6',
        time:'2023-03-16T19:41',
        date:'23/02/2023',
        amount:'1000'
    }
]
const ControlPump = () => {
    const [pumpSchedule,setPumpSchedule] = useState(true);
    const [pumpMoisture,setPumpMoisture] = useState(true);
    const [pumpManual,setPumpManual] = useState(false);
    const [data1,setData1] = useState();
    const handleClickSchedule = () => {
        setPumpSchedule((state) => setPumpSchedule(!state));
    }
    const handleClickMoisture = () => {
        setPumpMoisture((state) => setPumpMoisture(!state))
    }
    const handleClickManual = () => {
        setPumpManual((state) => setPumpManual(!state))
    }
    useEffect(() => {
        switchPump(pumpManual);
    },[pumpManual])
    
    const getData = async () => {
        return await getListSchedule().then((res) => console.log(res[0].dates));
    }
    // console.log(getData)
    // getListSchedule()
    useEffect(() => {
        getData()
    })
    return (
        <Container>
            <Row>
                <SideBar></SideBar>
                
                <Col className="mx-2">
                    <h1>Quản lý tưới cây</h1>  
                    <Row className={cx('box')}>
                        <Col xs={3} className={cx('center')}>
                            <div>
                                <h2>Tưới theo lịch</h2>
                            </div>
                            <ButtonGroup className=''>
                                <ToggleButton
                                onClick={handleClickSchedule}
                                variant={pumpSchedule? 'primary' : 'secondary'}
                                size="lg"
                                >ON</ToggleButton>
                                
                                <ToggleButton
                                onClick={handleClickSchedule}
                                variant={pumpSchedule? 'secondary' : 'primary'}
                                size="lg"
                                >OFF</ToggleButton>
                            </ButtonGroup>
                        </Col>
                        <Col xs={9} className={`${!pumpSchedule?'opacity-25':''}`}>
                            <RowSchedule schedule = {data} />
                            <Link to={{pathname:"/schedule"}}><Button>Thêm lịch</Button></Link>
                        </Col>
                    </Row>
                    <Row className={cx('row','py-5')}>
                        <Col className={cx('box','sm-box','col-left')}>
                            <div className={cx('center')}>   
                                <h2>Tưới theo độ ẩm</h2>
                                <ButtonGroup>
                                    <ToggleButton
                                    onClick={handleClickMoisture}
                                    variant={pumpMoisture? 'primary' : 'secondary'}
                                    size="lg"
                                    >ON
                                    </ToggleButton>
                                    <ToggleButton
                                    onClick={handleClickMoisture}
                                    variant={pumpMoisture? 'secondary' : 'primary'}
                                    size="lg"
                                    >OFF
                                    </ToggleButton>
                                </ButtonGroup>
                            </div>
                            <div className={cx(`${!pumpMoisture?'opacity-25':''}`,'center')} >
                                <h2>50%</h2>
                                <div>
                                    <Button size="lg">Thiết lập</Button>
                                </div>
                            </div>
                        </Col>
                        <Col className={cx('box','sm-box')}>
                        <div className={cx('center')}>
                            <div>
                                <h2>Tưới thủ công</h2>
                            </div>
                            <ButtonGroup>
                                <ToggleButton
                                onClick={handleClickManual}
                                variant={pumpManual? 'primary' : 'secondary'}
                                size="lg"
                                >ON
                                </ToggleButton>
                                <ToggleButton
                                onClick={handleClickManual}
                                variant={pumpManual? 'secondary' : 'primary'}
                                size="lg"
                                >OFF
                                </ToggleButton>
                            </ButtonGroup>
                        </div>       
                        </Col>
                    </Row>
                </Col>
            </Row>
            
  
        </Container>
    );
};

export default ControlPump;