import classnames from 'classnames/bind'
import styles from './SensorHistory.module.scss'
import { Button, Form, Table, Container, Dropdown, DropdownButton, Col, Row, Stack, Pagination } from 'react-bootstrap'
import SideBar from '../../../components/GlobalStyles/SideBar'
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getRecordList } from '../../../api/recordApi';
import { getDeviceList } from '../../../api/deviceApi'
const cx = classnames.bind(styles);
import stu from './Pagination';

function SensorHistory() {
    const lastPage = 5
    const sensorPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)
    const [startIndex, setStartIndex] = useState(1)

    const onPrev = () => {
        if (currentPage !== 1) {
            if (currentPage === startIndex) {
                setStartIndex(currentPage - 1)
            }
            setCurrentPage(currentPage - 1)
        }
    }

    const onNext = () => {
        if (currentPage !== lastPage) {
            if (currentPage === startIndex + 2) {
                setStartIndex(startIndex + 1)
            }
            setCurrentPage(currentPage + 1)
        }
    }

    const onFirst = () => {
        setCurrentPage(1)
        setStartIndex(1)
    }

    const onLast = () => {
        setCurrentPage(lastPage)
        setStartIndex(lastPage - 2)
    }

    const params = useParams()
    console.log(params.account)
    const [device, setDevice] = useState([])
    const [record, setRecord] = useState([])
    const [rawRecord, setRawRecord] = useState([])
    // let deviceName = []
    const loadDevice = async () => {
        try {
            const deviceList = await getDeviceList(params.account)
            console.log('device list')
            console.log(deviceList)
            console.log('id')
            console.log(deviceList[0]["id"])
            console.log('----')
            setDevice(deviceList)
            // deviceName = deviceList.map(device => <Dropdown.Item href="">{device.name}</Dropdown.Item>)
        } catch (err) {
            console.log(err)
        }

    }

    const loadRecord = async (device_id) => {
        try {
            console.log('device id = ' + device_id)
            let recordList = await getRecordList(device_id)
            console.log("hé lô đặc cầu")
            if (!recordList[0]) {
                setRawRecord([])
                setRecord([])
            }
            console.log('record [0]')
            console.log(recordList[0])
            console.log('record [0].valueList')
            console.log(recordList[0].valueList)

            let valueList = recordList[0].valueList
            setRawRecord(valueList)
            let type = recordList[0].type
            valueList = valueList.map((item, index) => {
                let controller = "Hệ thống"
                const ran = Math.floor(Math.random() * 2)
                if ((type == "maybom" || type == "den") && ran == 1)
                    controller = params.account
                return (
                    <tr key={index}>
                        <td>{controller}</td>
                        <td>{item.log_time}</td>
                        <td>{item.value}</td>
                    </tr>
                )
            })
            setRecord(valueList)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadDevice()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const device_id = document.getElementById('device-type').value
        console.log('device id')
        console.log(window.location.href)
        console.log(device_id)

        const stat = document.getElementById('stat')
        stat.setAttribute('href', window.location.href + '/' + device_id)

        loadRecord(device_id)
    };

    const handleChangeDate = (e) => {
        e.preventDefault()
        let start = document.getElementById("start").value
        let end = document.getElementById("end").value
        if (!start)
            alert("Vui lòng nhập ngày bắt đầu")
        else if (!end)
            alert("Vui lòng nhập ngày kết thúc")
        else {
            start = new Date(start).toISOString()
            end = new Date(end).toISOString()
            console.log("start " + start)
            console.log("end " + end)
            if (start > end)
                alert("Ngày bắt đầu phải nhỏ hơn ngày kết thúc")
            else {
                let newRecord = rawRecord.filter(item => {
                    if (item.log_time >= start && item.log_time <= end)
                        return item
                })
                console.log("new record")
                console.log(newRecord)
                newRecord = newRecord.map((item, index) => {
                    let controller = "Hệ thống"
                    const ran = Math.floor(Math.random() * 2)
                    if (ran == 1)
                        controller = params.account
                    return (
                        <tr key={index}>
                            <td>{controller}</td>
                            <td>{item.log_time}</td>
                            <td>{item.value}</td>
                        </tr>
                    )
                })
                setRecord(newRecord)
            }
        }
    }

    return (
        <div className="row mx-auto container">
            <SideBar position="sensor" />
            <div className='col-xl-9 col-md-9 mt-3 px-5 mx-auto'>
                <a href="" className={cx("return")}>
                    <i className="fa-solid fa-arrow-left"></i>
                    {/* {'<-- Trở lại'} */}
                </a>
                <h1 className="text-center">Lịch sử hoạt động</h1>

                <div className="row">
                    <div className="col-4 text-center my-4">
                        {/* <DropdownButton
                            id="equipment-type"
                            variant='dark'
                            size='lg'
                            title="Chọn thiết bị"
                        > */}
                        {/* <Dropdown.Item href="?device_id=2">Sensor độ ẩm đất</Dropdown.Item>
                            <Dropdown.Item href="?device_id=2">Sensor độ ẩm không khí</Dropdown.Item>
                            <Dropdown.Item href="?device_id=1">Sensor ánh sáng</Dropdown.Item>
                            <Dropdown.Item href="?device_id=3">Sensor nhiệt độ</Dropdown.Item>
                            <Dropdown.Item href="/device_id=5">Máy bơm</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">Đèn chiếu sáng</Dropdown.Item> */}

                        {/* </DropdownButton> */}
                        <form onSubmit={handleSubmit} className='d-flex justify-content-around'>
                            <select className="form-select form-select-lg  w-50" aria-label=".form-select-lg example" name="device-type" id="device-type">
                                <option defaultValue>Default</option>
                                {device.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}

                            </select>
                            <button type='submit' className='btn btn-dark'>Chọn</button>
                            {/* <select readOnly htmlFor="select" className="form-select form-select-lg " >
                                
                            </select> */}

                        </form>
                    </div>
                    <div className="col-4 text-center my-4">
                        <Button type='submit' size='lg' variant='dark'>Tải về</Button>
                    </div>
                    <div className="col-4 text-center my-4">
                        <Button id='stat' className='me-5 float-end' size='lg' variant='dark' as='a' href='/StatisticPage'>Thống kê hoạt động</Button>
                    </div>
                </div>
                <Row>
                    <Col xs={2} className='my-auto'>
                        {/* <Dropdown.Header>Chọn loại thiết bị</Dropdown.Header> */}

                    </Col>
                    <Col xs={2} className='my-auto'>
                        {/* <Dropdown.Header>Chọn thiết bị</Dropdown.Header>
                        <DropdownButton id="equipment-list" title="Sensor 1">
                            <Dropdown.Item href="#/action-1">Sensor 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sensor 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sensor 3</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Sensor 4</Dropdown.Item>
                        </DropdownButton> */}
                        {/* <Button type='submit' size="lg" variant='dark'>Chọn</Button> */}
                    </Col>
                    <Col xs={3}>

                    </Col>
                    <Col xs={3}>

                    </Col>
                    <Col>


                    </Col>
                </Row>
                <div className='text-center'>
                    <Table striped bordered hover className={cx('tbl')}>
                        <thead>
                            <tr>
                                <th>Người điều khiển</th>
                                <th>Thời gian</th>
                                <th>Giá trị </th>
                            </tr>
                        </thead>
                        <tbody>
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
                            {record.slice(currentPage * sensorPerPage - 5, currentPage * sensorPerPage)}
                        </tbody>
                    </Table>
                </div>

                {/* <stu /> */}

                <Pagination className='justify-content-center'>
                    <Pagination.First onClick={onFirst} />
                    <Pagination.Prev onClick={onPrev} />
                    <Pagination.Item onClick={() => setCurrentPage(startIndex)} key='first' className={currentPage - startIndex === 0 ? 'active' : ''}>{startIndex}</Pagination.Item>
                    <Pagination.Item onClick={() => setCurrentPage(startIndex + 1)} key='second' className={currentPage - startIndex === 1 ? 'active' : ''}>{startIndex + 1}</Pagination.Item>
                    <Pagination.Item onClick={() => setCurrentPage(startIndex + 2)} key='third' className={currentPage - startIndex === 2 ? 'active' : ''}>{startIndex + 2}</Pagination.Item>
                    <Pagination.Next onClick={onNext} />
                    <Pagination.Last onClick={onLast} />
                </Pagination>
                <div>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Form.Group controlId="start">
                                <Form.Label>Ngày bắt đầu</Form.Label>
                                <Form.Control size='sm' type="date"></Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col-4 text-center">
                            <Form.Group controlId="end">
                                <Form.Label>Ngày kết thúc</Form.Label>
                                <Form.Control size='sm' type="date"></Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col-4 text-center my-4" onClick={handleChangeDate}>
                            <Button type='submit' size='md' variant='dark'>Lọc</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensorHistory;