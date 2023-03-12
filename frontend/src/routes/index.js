import GardenList from "../pages/CustomerPages/GardenList/GardenList"
import LoginAs from "../pages/AuthorizationPages/LoginAs/LoginAs";
import Login from "../pages/AuthorizationPages/Login/Login"
import PassRetrival from "../pages/AuthorizationPages/PassRetrival/PassRetrival";
import Register from "../pages/AuthorizationPages/Register/Register";
import GardenDetail from "../pages/CustomerPages/GardenDetail/GardenDetail";
import GardenRegis from "../pages/CustomerPages/GardenRegis/GardenRegis";
import GardenModify from "../pages/CustomerPages/GardenModify/GardenModify";

const routes = [
    //Authorize
    {path: '/login-as', component: LoginAs},
    {path: '/login', component: Login},
    {path: '/pass-retri', component: PassRetrival},
    {path: '/register', component: Register},
    //Customer
    {path: '/', component: GardenList},
    {path: '/garden-detail', component: GardenDetail},
    {path: '/garden-regis', component: GardenRegis},
    {path: '/garden-mod', component: GardenModify}
]

export default routes;