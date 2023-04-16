import classnames from 'classnames/bind'
import styles from './SensorHistory.module.scss'
import { Button, Form, Table, Container, Dropdown, DropdownButton, Col, Row } from 'react-bootstrap'
import SideBar from '../../../components/GlobalStyles/SideBar'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getRecordList } from '../../../api/recordApi';
const cx = classnames.bind(styles);
import Pagination from './Pagination';
function SensorHistory() {

    const [deviceVal, setDeviceVal] = useState([]);
    // let data;
    const loadData = async () => {
        try {
            let data = await getRecordList(3)
            data = data[0].valueList
            setDeviceVal(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    
    const DataRow = (props) => {
        return (
            <tr>
                <td>{props.index + 1}</td>
                <td>{props.time}</td>
                <td>{props.value}</td>
            </tr>
        )
    }
    return (
        <div className="row mx-auto container">
            <SideBar position="sensor" />
            <div className='col-xl-9 col-md-9 mt-5 px-5 mx-auto'>
                <a href="" className={cx("return")}>

                    {'<-- Trở lại'}
                </a>
                <h1 className="text-center">Lịch sử hoạt động</h1>
                <Row>
                    <Col xs={2}>
                        <Dropdown.Header>Chọn loại thiết bị</Dropdown.Header>
                        <DropdownButton id="equipment-type" title="Sensor nhiệt độ">
                            <Dropdown.Item href="#/action-1">Sensor độ ẩm đất</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sensor độ ẩm không khí</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sensor ánh sáng</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Sensor nhiệt độ</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col xs={2}>
                        <Dropdown.Header>Chọn thiết bị</Dropdown.Header>
                        <DropdownButton id="equipment-list" title="Sensor 1">
                            <Dropdown.Item href="#/action-1">Sensor 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sensor 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sensor 3</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Sensor 4</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="date">
                            <Form.Label>Ngày bắt đầu</Form.Label>
                            <Form.Control size='sm' type="date"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="date">
                            <Form.Label>Ngày kết thúc</Form.Label>
                            <Form.Control size='sm' type="date"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button type='submit' size='lg' variant='secondary'>Tải về</Button>
                    </Col>
                </Row>

                {/* <Table striped bordered hover className={cx('tbl')}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thời gian</th>
                            <th>Giá trị (độ C)</th>
                        </tr>
                    </thead>
                    <tbody> */}
                        {/* <tr>
                        <td>3</td>
                        <td>2023/03/10 01:45:30PM</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2023/03/10 01:45:00PM</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2023/03/10 01:44:30PM</td>
                        <td>31</td>
                    </tr> */}
                        {/* {
                            deviceVal.map((device, index) => <DataRow key={index} index={index} time={device.log_time} value={device.value} />)
                        } */}
                    {/* </tbody>
                </Table> */}
                <Pagination />
                <Button className='my-2 me-5 float-end' variant='secondary' as='a' href='/StatisticPage'>Thống kê hoạt động</Button>
            </div>
        </div>
    )
}

export default SensorHistory;