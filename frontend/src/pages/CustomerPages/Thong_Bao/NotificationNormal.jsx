import { useState } from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";

function Notification() {
    const [visible, setVisiable] = useState(true)

    const [showConfirm, setShowConfirm] = useState(false)
    const showModalConfirm = () => setShowConfirm(true)
    const hideModalConfirm = () => setShowConfirm(false)

    const [showSuccess, setShowSuccess] = useState(false)
    const showModalSuccess = () => {
        setShowSuccess(true)
        setShowConfirm(false)
    }
    const hideModalSuccess = () => {
        setShowSuccess(false)
        setVisiable(false)
    }

    const [showDetail, setShowDetail] = useState(false)
    const [isRead, setIsRead] = useState(false)
    const showModalDetail = () => {
        setShowDetail(true)
        setIsRead(true)
    }
    const hideModalDetail = () => setShowDetail(false)

    const icon_style = {
        height: '2rem',
    }

    return (
        <>
        {   visible && ( <>
            <Row className={!isRead ? "my-3 fw-bold" : "my-3"}>
                <Col md={{span: 1}} onClick={showModalDetail} className="d-flex justify-content-center">
                    <img src='./images/Icon_do_am_khong_khi.svg' alt="Độ ẩm không khí" style={icon_style}/>
                </Col>
                <Col md={{span: 4}} onClick={showModalDetail}>Thông báo độ ẩm không khí</Col>
                <Col md={{span: 3}} onClick={showModalDetail}>8:48 PM 22/2/2023</Col>
                <Col md={{span: 3}} onClick={showModalDetail}>{!isRead ? "Chưa đọc" : "Đã đọc"}</Col>
                <Col md={{span: 1}} className="d-flex justify-content-center">
                    <button onClick={showModalConfirm}>
                    <img src='./images/Icon_delete.svg' alt="Xóa" style={icon_style} />
                    </button>
                </Col>
            </Row>

            <Modal size='lg' id="Modal-detail" onHide={hideModalDetail} show={showDetail} centered>
                <Modal.Header>
                    <Container>
                    <Row>
                        <Col className='d-flex'>
                        <img src='./images/Icon_do_am_khong_khi.svg' alt="Độ ẩm không khí" style={icon_style}/>
                        <span className='ms-3 fs-5 fw-bold'>Cảnh báo độ ẩm không khí</span>
                        </Col>
                    </Row>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Row className='g-2'>
                        <Col sm={6} className="p-2">
                        Thời gian: 22/3/2023 12:30PM
                        </Col>
                        <Col sm={6} className="p-2">
                        Độ ẩm tối đa: 33%
                        </Col>
                        <Col sm={6} className="p-2">
                        Mảnh vườn: ???
                        </Col>
                        <Col sm={6} className="p-2">
                        Độ ẩm hiện tại: 35%
                        </Col>
                        <Col sm={12} className="p-2">
                        Vị trí: ???
                        </Col>
                    </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideModalDetail} variant="secondary">Thoát</Button>
                </Modal.Footer>
            </Modal>

            <Modal id="Modal-confirm" onHide={hideModalConfirm} show={showConfirm} centered>
                <Modal.Body>
                    <p className='text-center fw-bold'>Bạn có muốn xóa thông báo này không?</p>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <Button onClick={showModalSuccess} variant="primary">Xác nhận</Button>
                    <Button onClick={hideModalConfirm} variant="danger" className='ms-5'>Hủy</Button>
                </Modal.Footer>
            </Modal>

            <Modal id="Modal-success" onHide={hideModalSuccess} show={showSuccess} centered>
                <Modal.Body className='d-flex flex-column justify-content-center'>
                    <img src="./images/Icon_xac_nhan.svg" style={{height: '5rem'}} alt="Xác nhận"/>
                    <div className='text-center fw-bold fs-6 mt-3'>Bạn đã xóa thành công</div>
                </Modal.Body>
            </Modal>

            </>)}
        </>
    )
}

export default Notification