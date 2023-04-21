import React, { useState } from "react";
import logo from "../../assets/admin-logo.png";
import user from "../../assets/users.png";
import request from "../../assets/request.png";
import device from "../../assets/frame.png";
import active_user from "../../assets/users-active.png";
import active_request from "../../assets/request-active.png";
import active_device from "../../assets/frame-active.png";
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { NavLink } from "react-bootstrap";
const cx = classNames.bind(styles);

function SideBar() {
    const sbstyle = {
        backgroundColor: '#007155',
        height: '100vh',
        textDecoration: "none"
    }

    const linkStyle = {
        textDecoration: "none",
        color: 'white'
    };
    const location = useLocation();
    const path = location.pathname;
    const userLogo = (path == "/admin") ? active_user : user;
    const requestLogo = (path == "/admin/request") ? active_request : request;
    const deviceLogo = (path == "/admin/device") ? active_device : device;
    // const [userLogo, setUserLogo] = useState(active_user);
    // const [requestLogo, setRequestLogo] = useState(request);
    // const [deviceLogo, setDeviceLogo] = useState(device);

    // function handleMangeUser() {
    //     setUserLogo(userLogo => active_user);
    //     setRequestLogo(requestLogo => request);
    //     setDeviceLogo((deviceLogo) => device);
    // }
    // function handleManageRequest() {
    //     setUserLogo(userLogo => user);
    //     setRequestLogo(requestLogo => active_request);
    //     setDeviceLogo((deviceLogo) => device);
    // }
    // function handleMangeDevice() {
    //     setUserLogo(userLogo => user);
    //     setRequestLogo(requestLogo => request);
    //     setDeviceLogo((deviceLogo) => active_device);
    // }
    return (
        <div className="side-bar col-xl-3 col-md-3 container p-auto" style={sbstyle}>
            <img className="admin-logo img-fluid mx-auto d-block py-5" src={logo}></img>

            <div className="my-5 mx-5">
                <Link to="/admin" style={linkStyle}>
                    <h6 className="d-flex align-items-center">
                        <img src={userLogo} className="pe-3 admin-user-icon"></img>
                        Quản lý khách hàng
                    </h6>
                </Link>
            </div>
            <div className="my-5 mx-5">
                <Link to="/admin/request" style={linkStyle}>
                    <h6 className="d-flex align-items-center">
                        <img src={requestLogo} className="pe-3 admin-request-icon"></img>
                        Quản lý yêu cầu
                    </h6>
                </Link>
            </div>
            <div className="my-5 mx-5">
                <Link to="/admin/device" style={linkStyle}>
                    <h6 className="d-flex align-items-center">
                        <img src={deviceLogo} className="pe-3 admin-cloud-icon"></img>
                        Quản lý thiết bị
                    </h6>
                </Link>
            </div>
            <hr className="w-75 mx-auto" />
            <div className="logout text-center mt-5">Đăng xuất</div>
        </div>
    );
}

export default SideBar;