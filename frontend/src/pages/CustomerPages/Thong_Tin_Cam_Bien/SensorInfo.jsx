import { Row, Col } from "react-bootstrap";

function SensorInfo({i}) {
    const icon_style = {
        height: '2rem'
    }

    return (
        <Row className='my-3'>
          <Col md={{span: 1}} className="d-flex justify-content-center">
            <img src='./images/Icon_do_am_khong_khi.svg' alt="Độ ẩm không khí" style={icon_style}/>
            <img src='./images/Icon_nhiet_do.svg' alt="Nhiệt độ" style={icon_style}/>
          </Col>
          <Col md={{span: 3}}>DHP {i}</Col>
          <Col md={{span: 2}}>5</Col>
          <Col md={{span: 2}}>5</Col>
          <Col md={{span: 2}}>22/2/2023</Col>
          <Col md={{span: 2}}>Bình thường</Col>
        </Row>
    )
}

export default SensorInfo