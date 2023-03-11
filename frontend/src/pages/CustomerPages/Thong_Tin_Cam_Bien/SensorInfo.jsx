import classnames from 'classnames/bind'
import styles from './SensorInfo.module.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Stack} from 'react-bootstrap'

const cx = classnames.bind(styles);

function SensorInfo() {
  return (
    <div className={cx('container')}>
        <a href="" className={cx("return")}>{'<-- Trở lại'}</a>
        <h1 className="text-center">Thông tin cảm biến</h1>
        
        <h5>Tìm kiếm: </h5>
        <Form className={cx("search-form")}>
            <Stack direction='horizontal' gap={5} className="justify-content-evenly">
                <Form.Group controlId="sensorName">
                    <Form.Label>Tên sensor</Form.Label>
                    <Form.Control size="sm" placeholder='Nhập tên vào đây'></Form.Control>
                </Form.Group>

                <Form.Group controlId="sensorType">
                    <Form.Label>Loại sensor</Form.Label>
                    <Form.Select size="sm">
                      <option>{'-----Vui lòng chọn-----'}</option>
                      <option value={1}>Nhiệt độ</option>
                      <option value={2}>Độ ẩm không khí</option>
                      <option value={3}>Độ ẩm đất</option>
                      <option value={4}>Ánh sáng</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="date">
                  <Form.Label>Ngày lắp đặt</Form.Label>
                  <Form.Control size='sm' type="date"></Form.Control>
                </Form.Group>

                <Form.Group controlId="status">
                    <Form.Label>Trạng thái</Form.Label>
                    <Form.Select size="sm">
                      <option>{'-----Vui lòng chọn-----'}</option>
                      <option value={1}>Bình thường</option>
                      <option value={2}>Đang bảo trì</option>
                      <option value={3}>Hư hỏng</option>
                    </Form.Select>
                </Form.Group>

                <Button size='lg' variant='secondary'>Lọc</Button>
            </Stack>
        </Form>

        <Row className={cx('title')}>
          <Col md={{span: 3, offset:1}}>Tên sensor</Col>
          <Col md={{span: 2}}>Hàng</Col>
          <Col md={{span: 2}}>Cột</Col> 
          <Col md={{span: 2}}>Thời gian lắp đặt</Col>
          <Col md={{span: 2}}>Trạng thái</Col>
        </Row>
        <hr />

        <Row>
          <Col md={{span: 1}} className="d-flex justify-content-center">
            <img src='./images/Icon_do_am_khong_khi.svg' alt="Độ ẩm không khí" className={cx('icon')}/>
            <img src='./images/Icon_nhiet_do.svg' alt="Nhiệt độ" className={cx('icon')}/>
          </Col>
          <Col md={{span: 3}}>DHP 20</Col>
          <Col md={{span: 2}}>5</Col>
          <Col md={{span: 2}}>5</Col>
          <Col md={{span: 2}}>22/2/2023</Col>
          <Col md={{span: 2}}>Bình thường</Col>
        </Row>
    </div>
  )
}

export default SensorInfo