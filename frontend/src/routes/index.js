import SensorHistory from "../pages/CustomerPages/Lich_Su_Hoat_Dong/SensorHistory.jsx";
import SensorInfoPage from "../pages/CustomerPages/Thong_Tin_Cam_Bien/SensorInfoPage.jsx";
import NotificationPage from "../pages/CustomerPages/Thong_Bao/NotificationPage.jsx";
import GardenList from "../pages/CustomerPages/GardenList/GardenList"
import LoginAs from "../pages/AuthorizationPages/LoginAs/LoginAs";
import Login from "../pages/AuthorizationPages/Login/Login"
import PassRetrival from "../pages/AuthorizationPages/PassRetrival/PassRetrival";
import Register from "../pages/AuthorizationPages/Register/Register";
import GardenDetail from "../pages/CustomerPages/GardenDetail/GardenDetail";

import SensorHistory_copy from "../pages/CustomerPages/Lich_Su_Hoat_Dong/SensorHistory-copy.jsx";
import StatisticPage from "../pages/CustomerPages/Thong_Ke_Lich_SU/StatisticPage.jsx";


import GardenDashboard from "../pages/CustomerPages/GardenDashboard/GardenDashboard";
import ManageSensor from "../pages/CustomerPages/ManageSensor/ManageSensor";
import InputValue from "../pages/CustomerPages/InputValue/InputValue";
import ManageUser from "../pages/AdminPages/ManageUser";
import ManageRequest from "../pages/AdminPages/ManageRequest";

const routes = [
    //Authorize
    { path: '/login-as', component: LoginAs },
    { path: '/login', component: Login },
    { path: '/pass-retri', component: PassRetrival },
    { path: '/register', component: Register },
    //Customer
    {path: '/', component: GardenList},
    {path: '/garden-detail', component: GardenDetail},

    {path: '/sensor-history', component: SensorHistory_copy},
    {path: '/SensorInfoPage', component: SensorInfoPage},
    {path: '/NotificationPage', component: NotificationPage},
    {path: '/StatisticPage', component: StatisticPage},


    {path: '/GardenDashboard', component:GardenDashboard },
    {path: '/InputValue', component: InputValue},
    { path: '/ManageSensor', component: ManageSensor },
    { path: 'admin', component: ManageUser },
    { path: 'admin/request', component: ManageRequest }

]

export default routes;

