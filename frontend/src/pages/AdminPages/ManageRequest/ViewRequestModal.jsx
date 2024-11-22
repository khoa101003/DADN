import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import read from "../../../assets/read.png";
import white_request from "../../../assets/request-white.png";
import DeleteRequest from "./DeleteRequest"
import UpdateRequest from './UpdateRequest';
import CreateRequest from './CreateRequest';
import { delPieceById, handleRequest } from '../../../api/home_pieceApi'
import { hideRequest } from '../../../api/requestApi';
function ViewRequestModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }


    const typ = props.request.name
    let data = {}
    let content
    if (typ == "Delete Home") {
        content = <DeleteRequest request={props.request} />
    } else if (typ == "Register Home") {
        content = <CreateRequest request={props.request} />
        data = {
            request: "add",
            name: props.request.registerHome.name,
            type: props.request.registerHome.type,
            location: props.request.registerHome.location,
            owner: props.request.registerHome.owner,
            area: props.request.registerHome.area,
        }
        console.log('data ne');
        console.log(data);
    } else {
        content = <UpdateRequest request={props.request} />
        data = {

            type: "update",
            id: props.request.registerHome.id,
            name: props.request.registerHome.name,
            type: props.request.registerHome.type,
            location: props.request.registerHome.location,
            owner: props.request.registerHome.owner,
            area: props.request.registerHome.area,
        }
        console.log('data ne');
        console.log(data);
    }
    function handleAcceptRequest() {
        if (props.request.status) {
            alert('Bạn đã xử lý yêu cầu này rồi')
        } else {
            const flag = {
                id: props.request._id,
                type: "read"
            }
            hideRequest(flag)
            console.log('flag ne');
            console.log(flag);
            if (typ == "Delete Home") {
                const isSuccess = delPieceById(props.request.registerHome.id)
                if (isSuccess) {
                    alert('Xóa thành công')
                    location.reload();
                }
            } else if (typ == "Register Home") {
                const isSuccess = handleRequest(data)
                if (isSuccess) {
                    alert('Thêm thành công')
                    location.reload();
                }
            } else {
                const isSuccess = handleRequest(data)
                if (isSuccess) {
                    alert('Sửa thành thành công')
                    location.reload();
                }
            }
        }

    }
    return (
        <>
            <Button variant="success" onClick={handleShow} className="mx-2">
                <img src={read} />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
                size="lg"
            >
                <Modal.Header className="bg-success" closeButton>
                    <Modal.Title className="d-flex align-items-center text-white">
                        <img src={white_request} className="me-2" />
                        {props.request.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="my-3">
                        {/* Tên mảnh vườn: {props.request.name} */}
                    </div>
                    <div className="my-3">
                        {/* Diện tích: {props.request.detail.area} */}
                    </div>
                    <div className="my-3">
                        {/* Vị trí: {props.request.detail.location} */}
                    </div>
                    <div className="my-3">
                        {/* Loại cây trồng: {props.request.detail.type} */}
                    </div>
                    <div className="row">
                        {/* <DeleteRequest request={props.request} /> */}
                        {/* <UpdateRequest request={props.request} /> */}
                        {content}
                        {/* <div className="col-5">
                            Cảm biến độ ẩm đất:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.soil}
                        </div>
                        <div className="col-5">
                            Cảm biến ánh sáng:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.light}
                        </div>
                        <div className="col-5">
                            Cảm biến độ ẩm không khí:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.air}
                        </div>
                        <div className="col-5">
                            Cảm biến nhiệt độ:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.sensor.temp}
                        </div>
                        <div className="col-5">
                            Máy bơm:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.pump}
                        </div>
                        <div className="col-5">
                            Đèn cảnh báo:
                        </div>
                        <div className="col-1">
                            {props.request.detail.device.light}
                        </div> */}
                        <hr className="w-75 mx-auto my-4" />
                        <div className="fw-bold">
                            Ghi chú của khách hàng: {props.request.registerHome.special}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleAcceptRequest} size="lg">
                        Đồng ý
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewRequestModal;