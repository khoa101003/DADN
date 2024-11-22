import SensorHistory from "../pages/CustomerPages/Lich_Su_Hoat_Dong/SensorHistory.jsx";
import SensorInfoPage from "../pages/CustomerPages/Thong_Tin_Cam_Bien/SensorInfoPage.jsx";
import NotificationPage from "../pages/CustomerPages/Thong_Bao/NotificationPage.jsx";
import HomeList from "../pages/CustomerPages/HomeList/HomeList"
import LoginAs from "../pages/AuthorizationPages/LoginAs/LoginAs";
import Login from "../pages/AuthorizationPages/Login/Login"
import PassRetrival from "../pages/AuthorizationPages/PassRetrival/PassRetrival";
import Register from "../pages/AuthorizationPages/Register/Register";
import HomeDetail from "../pages/CustomerPages/HomeDetail/HomeDetail";
import HomeRegis from "../pages/CustomerPages/HomeRegis/HomeRegis";
import HomeModify from "../pages/CustomerPages/HomeModify/HomeModify";

import StatisticPage from "../pages/CustomerPages/Thong_Ke_Lich_SU/StatisticPage.jsx";


import HomeDashboard from "../pages/CustomerPages/HomeDashboard/HomeDashboard";
import ManageSensorPage from "../pages/CustomerPages/ManageSensor/ManageSensorPage";
import InputValue from "../pages/CustomerPages/InputValue/InputValue";
import ManageUser from "../pages/AdminPages/ManageUser/ManageUser.jsx";
import ManageRequest from "../pages/AdminPages/ManageRequest/ManageRequest.jsx";
import ControlPump from "../pages/CustomerPages/ControlPump/ControlPump";
import Schedule from "../pages/CustomerPages/Schedule/Schedule.jsx";
import NavigateCus from "../pages/CustomerPages/NavigateCus/NavigateCus.jsx";

// Tech part 
import Search from "../pages/TechnicianPages/SearchUser/Search.jsx"
import HomeLst from "../pages/TechnicianPages/HomeLst/HomeLst.jsx"
import DeviceType from "../pages/TechnicianPages/DeviceType/DeviceType.jsx"
import ManageDevice from "../pages/TechnicianPages/ManageDevice/ManageDevice.jsx"
const routes = [
    //Navigate page
    { path: '/', component: NavigateCus },
    //Authorize
    { path: '/login-as', component: LoginAs },
    { path: '/login/:role', component: Login },
    { path: '/pass-retri', component: PassRetrival },
    { path: '/register', component: Register },
    //Customer
    { path: '/:account', component: HomeList },
    { path: '/:account/home-detail/:id', component: HomeDetail },

    { path: '/:account/home-regis', component: HomeRegis },
    { path: '/:account/home-mod/:id', component: HomeModify },

    { path: '/:account/SensorHistory/:home_id', component: SensorHistory },
    { path: '/:account/SensorInfoPage/:home_id', component: SensorInfoPage },
    { path: '/:account/NotificationPage', component: NotificationPage },
    { path: '/:account/SensorHistory/:home_id/:device_id', component: StatisticPage },


    { path: '/:account/dashboard/:home_id', component: HomeDashboard },
    { path: '/:account/InputValue/:home_id', component: InputValue },
    { path: '/:account/ManageSensor', component: ManageSensorPage },
    { path: '/:account/controlPump/:home_id', component: ControlPump },
    { path: '/:account/schedule/:home_id', component: Schedule },
    { path: '/admin', component: ManageUser },
    { path: '/admin/request', component: ManageRequest },
    // Technician part
    { path: '/tech', component: Search },
    { path: '/tech/:account', component: HomeLst },
    { path: '/tech/:account/:gar_id', component: DeviceType },
    { path: '/tech/:account/:gar_id/:device_type', component: ManageDevice }
]

export default routes;
