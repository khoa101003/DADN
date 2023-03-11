import classnames from 'classnames/bind'
import styles from './Notification.module.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Stack} from 'react-bootstrap'

const cx = classnames.bind(styles);

function Notification() {
  return (
    <div className={cx('container')}>
        <a href="" className={cx("return")}>{'<-- Trở lại'}</a>
        <h1 className="text-center">Thông tin cảm biến</h1>
        
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

        <Row>
          <Col md={{span: 1}} className="d-flex justify-content-center">
            <img src='./images/Icon_do_am_khong_khi.svg' alt="Độ ẩm không khí" className={cx('icon')}/>
          </Col>
          <Col md={{span: 4}}>Thông báo độ ẩm không khí</Col>
          <Col md={{span: 3}}>8:48 PM 22/2/2023</Col>
          <Col md={{span: 3}}>Chưa đọc</Col>
          <Col md={{span: 1}} className="d-flex justify-content-center">
            <img src='./images/Icon_delete.svg' alt="Xóa" className={cx('icon')} />
          </Col>
        </Row>
    </div>
  )
}

export default Notification