import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import classNames from 'classnames/bind';
import styles from './DisplayItem.module.scss'

const cx= classNames.bind(styles);

const DisplayItem = ({items}) => {
  console.log(items)
    return (
        <Container>
          <Row >
                  <Col><h5>Loại cảm biến</h5></Col>
                  <Col><h5>Khu vườn</h5></Col>
                  <Col><h5>Hàng</h5></Col>
                  <Col><h5>Thời gian lắp đặt</h5></Col>
                  <Col><h5>Trạng thái</h5></Col>
          </Row>
          {
            items.map((item) => {
              return(
                <Row key={item.id} className='my-5'>
                  <Col><h5>{item.type}</h5> </Col>
                  <Col><h5>{item.garden}</h5></Col>
                  <Col><h5>{item.row}</h5></Col>
                  <Col><h5>{item.time}</h5></Col>
                  <Col><h5>{item.status}</h5></Col>
                </Row>
              )
            })
          }
        </Container>
    );
};

export default DisplayItem;