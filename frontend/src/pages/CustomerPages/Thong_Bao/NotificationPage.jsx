import classnames from 'classnames/bind'
import styles from './NotificationPage.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Stack} from 'react-bootstrap'
import Notification from './Notification';
import SideBar from '../../../components/GlobalStyles/SideBar';
import { getNotificationList } from '../../../api/notificationApi';
import { useEffect, useState } from 'react';

const cx = classnames.bind(styles);



function NotificationPage() {
  const [notifications, setNotifications] = useState([])

  const loadData = async function () {
    await getNotificationList().then((result) => {
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
    })
  }

  useEffect(() => {
    loadData()
  },[])


  return (
    <div className="row mx-auto container">
      <SideBar position="notify"/>
      <div className='col-xl-9 col-md-9 mt-5 mx-auto'>
          {/*<a href="" className={cx("return")}>{'<-- Trở lại'}</a>*/}
          <h1 className="text-center">Thông báo</h1>
          
          <h5>Tìm kiếm: </h5>
          <Form className={cx("search-form")}>
              <Stack direction='horizontal' gap={5} className="justify-content-evenly">
                  <Form.Group controlId="notificationType">
                      <Form.Label>Loại thông báo</Form.Label>
                      <Form.Select size="sm">
                        <option>{'-----Vui lòng chọn-----'}</option>
                        <option value={1}>Nhiệt độ</option>
                        <option value={2}>Độ ẩm không khí</option>
                        <option value={3}>Độ ẩm đất</option>
                        <option value={4}>Thu hoạch</option>
                      </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="date">
                    <Form.Label>Ngày</Form.Label>
                    <Form.Control size='sm' type="date"></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="status">
                      <Form.Label>Trạng thái</Form.Label>
                      <Form.Select size="sm">
                        <option>{'-----Vui lòng chọn-----'}</option>
                        <option value={1}>Chưa đọc</option>
                        <option value={2}>Đã đọc</option>
                      </Form.Select>
                  </Form.Group>

                  <Button size='lg' variant='secondary'>Lọc</Button>
              </Stack>
          </Form>

          <Row className={cx('title')}>
            <Col md={{span: 4, offset:1}}>Tiêu đề</Col>
            <Col md={{span: 3}}>Thời gian</Col>
            <Col md={{span: 3}}>Trạng thái</Col>
          </Row>
          <hr />

          {
            notifications.map((notification,i) => 
              <Notification key={i} id={notification._id} type={notification.type} urgent={notification.urgent}
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