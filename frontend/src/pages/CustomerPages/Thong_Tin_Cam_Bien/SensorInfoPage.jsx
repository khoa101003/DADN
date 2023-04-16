import classnames from 'classnames/bind'
import styles from './SensorInfoPage.module.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Stack, Pagination} from 'react-bootstrap'
import SensorInfo from './SensorInfo';
import { useState } from 'react';
import SideBar from '../../../components/GlobalStyles/SideBar';

const cx = classnames.bind(styles);

function SensorInfoPage() {
  const lastPage = 5
  const sensorPerPage = 5

  // const sensorList = Array.from({length : 50}, (_, i) => i + 1).map((i) => (
  //   <SensorInfo i={i} />
  // ))
  const sensorList = []

  const emptyRow = (
    <Row className='my-3' style={{height : '32px'}}></Row>
  )

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

  return (
    <div className="row mx-auto container">
      <SideBar />
      <div className='col-xl-9 col-md-9 mt-5 mx-auto'>
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

                <Button type='submit' size='lg' variant='secondary'>Lọc</Button>
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

        {sensorList.slice(currentPage * sensorPerPage - 5, currentPage * sensorPerPage)}

        <Pagination className='justify-content-center'>
          <Pagination.First onClick={onFirst} />
          <Pagination.Prev onClick={onPrev}/>
          <Pagination.Item onClick={()=>setCurrentPage(startIndex)} key='first' className={currentPage - startIndex === 0 ? 'active' : ''}>{startIndex}</Pagination.Item>
          <Pagination.Item onClick={()=>setCurrentPage(startIndex + 1)} key='second' className={currentPage - startIndex === 1 ? 'active' : ''}>{startIndex + 1}</Pagination.Item>
          <Pagination.Item onClick={()=>setCurrentPage(startIndex + 2)} key='third' className={currentPage - startIndex === 2 ? 'active' : ''}>{startIndex + 2}</Pagination.Item>
          <Pagination.Next onClick={onNext} />
          <Pagination.Last onClick={onLast}/>
        </Pagination>
        <Button className='my-2 me-5 float-end' variant='secondary' as='a' href=''>Thiết lập</Button>
      </div>
    </div>
  )
}

export default SensorInfoPage