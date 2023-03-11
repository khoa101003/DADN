import SensorHistory from "../pages/CustomerPages/Lich_Su_Hoat_Dong/SensorHistory.jsx";
import SensorInfo from "../pages/CustomerPages/Thong_Tin_Cam_Bien/SensorInfo.jsx";
import Notification from "../pages/CustomerPages/Thong_Bao/Notification.jsx";
import GardenList from "../pages/CustomerPages/GardenList/GardenList"
import LoginAs from "../pages/AuthorizationPages/LoginAs/LoginAs";
import Login from "../pages/AuthorizationPages/Login/Login"
import PassRetrival from "../pages/AuthorizationPages/PassRetrival/PassRetrival";
import Register from "../pages/AuthorizationPages/Register/Register";
import GardenDetail from "../pages/CustomerPages/GardenDetail/GardenDetail";

const routes = [
    //Authorize
    {path: '/login-as', component: LoginAs},
    {path: '/login', component: Login},
    {path: '/pass-retri', component: PassRetrival},
    {path: '/register', component: Register},
    //Customer
    {path: '/', component: GardenList},
    {path: '/garden-detail', component: GardenDetail}
]

export default routes;