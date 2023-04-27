import classnames from 'classnames/bind'
import styles from './NotificationPage.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Stack} from 'react-bootstrap'
import Notification from './Notification';
import SideBar from '../../../components/GlobalStyles/SideBar';
import { getNotificationList } from '../../../api/notificationApi';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const cx = classnames.bind(styles);

function isSameDate(date1, date2) {
  if (date1.getFullYear() !== date2.getFullYear())
    return false
  if (date1.getMonth() !== date2.getMonth())
    return false
  if (date1.getDate() !== date2.getDate())
    return false
  return true
}

function NotificationPage() {
  const [notifications, setNotifications] = useState([])
  const [ notiShow, setNotiShow ] = useState([])
  const realTime = useRef(true)
  const params = useParams()

  const loadData = async function () {
    await getNotificationList(params.account).then((result) => {
      result.sort(function (a,b) {
        if (a.isRead && !b.isRead) {
          return 1
        }
        else if (!a.isRead && b.isRead) {
          return -1
        }
        else if (a.isRead && b.isRead) {
          return (a.time > b.time) ? -1 : 1
        }
        else {
          if (a.urgent && !b.urgent) {
            return -1
          }
          else if (!a.urgent && b.urgent) {
            return 1
          }
          else {
            return (a.time > b.time) ? -1 : 1
          }
        }
      })
      setNotifications(result)
      setNotiShow(result)
    })
  }

  useEffect(() => {
    const socket = io('http://localhost:3030')
    socket.emit('notify', params.account)
    socket.on('connect_error', (error) => {
      console.log('Connection error:', error);
    });
    socket.on('connect_timeout', (timeout) => {
      console.log('Connection timeout:', timeout);
    });
    socket.on('newNotify', () => {
      if (realTime.current) loadData()
    })
    loadData()
    return () => {
      socket.disconnect()
    }
  },[])

  const handleClick = function (e) {
    e.preventDefault();
    let type = document.getElementById("notificationType").value;

    let time = document.getElementById("date").value;

    let isRead =  document.getElementById("status").value;
    isRead = isRead === "true" ? true
      : isRead === "false" ? false
      : "DEFAULT";


    const newNotiShow = notifications.filter((nt) => {
      if (type !== "DEFAULT" && nt.type !== type) {
        return false;
      }
      if (time) {
        let notiDate = new Date(nt.time)
        let filterDate = new Date(time)
          if (!isSameDate(notiDate, filterDate)) return false;
      }
      if (isRead !== "DEFAULT" && nt.isRead !== isRead) {
        return false;
      }
      return true;
    })
    realTime.current = false
    setNotiShow(newNotiShow)
  }

  const handleReset = function (e) {
    const type = document.getElementById("notificationType");
    const time = document.getElementById("date");
    const isRead =  document.getElementById("status");

    type.value = "DEFAULT"
    time.value = time.defaultValue
    isRead.value = "DEFAULT"

    realTime.current = true
    loadData()
  }

  return (
    <div className="row mx-auto container">
      <SideBar position="notify" account={params.account} />
      <div className='col-xl-9 col-md-9 mt-5 mx-auto'>
          <h1 className="text-center">Thông báo</h1>
          
          <h5>Tìm kiếm: </h5>
          <Form className={cx("search-form")}>
              <Stack direction='horizontal' gap={5} className="justify-content-evenly">
                  <Form.Group controlId="notificationType">
                      <Form.Label>Loại thông báo</Form.Label>
                      <Form.Select size="sm">
                        <option value={"DEFAULT"}>{'-----Vui lòng chọn-----'}</option>
                        <option value={"Temperature"}>Nhiệt độ</option>
                        <option value={"Air Humidity"}>Độ ẩm không khí</option>
                        <option value={"Soil Humidity"}>Độ ẩm đất</option>
                        <option value={"Harvest"}>Thu hoạch</option>
                        <option value={"Device"}>Thiết bị</option>
                      </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="date">
                    <Form.Label>Ngày</Form.Label>
                    <Form.Control size='sm' type="date"></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="status">
                      <Form.Label>Trạng thái</Form.Label>
                      <Form.Select size="sm">
                        <option value={"DEFAULT"}>{'-----Vui lòng chọn-----'}</option>
                        <option value={false}>Chưa đọc</option>
                        <option value={true}>Đã đọc</option>
                      </Form.Select>
                  </Form.Group>

                  <Button size='lg' variant='primary' onClick={handleClick}>Lọc</Button>
                  <Button size='lg' variant='secondary' onClick={handleReset}>Reset</Button>
              </Stack>
          </Form>

          <Row className={cx('title')}>
            <Col md={{span: 4, offset:1}}>Tiêu đề</Col>
            <Col md={{span: 3}}>Thời gian</Col>
            <Col md={{span: 3}}>Trạng thái</Col>
          </Row>
          <hr />

          {
            notiShow.map((notification) => 
              <Notification key={notification._id} id={notification._id} type={notification.type} urgent={notification.urgent}
              isReadN={notification.isRead} measure={notification.measure} threshold={notification.threshold}
              time={notification.time} gardenName={notification.gardenName} x={notification.coordinates.x}
              y={notification.coordinates.y}/>
            )
          }

      </div>
    </div>
  )
}

export default NotificationPage