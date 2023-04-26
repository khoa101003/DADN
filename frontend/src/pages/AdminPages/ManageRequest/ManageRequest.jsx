import RequestRow from "./RequestRow";
import Pagination from "../Pagination";
import data from "../requestData.js";
import AddGarden from "./AddGarden";
import UpdateGarden from "./UpdateGarden";
import DeleteGarden from "./DeleteGarden";
import SideBar from "../../../components/GlobalStyles/AdminSideBar";
import "../Admin.css";
function ManageRequest() {
    const requestList = data.map(request => < RequestRow key={request.id} request={request} />);
    return (
        <div className="row container mx-auto">
            <SideBar position="request" />
            <div className="col-xl-9 col-md-9 mt-5 px-5 mx-auto">
                <h1 className="text-center fw-bold">Yêu cầu của khách hàng</h1>
                <div className="row my-5">
                    <div className="col-4 text-center">
                        < AddGarden />
                    </div>
                    <div className="col-4 text-center">
                        < DeleteGarden />
                    </div>
                    <div className="col-4 text-center">
                        < UpdateGarden />
                    </div>
                </div>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Nội dung</th>
                            <th scope="col">Người gửi</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestList}
                    </tbody>
                </table>
                < Pagination />
            </div>
        </div>

    );
}

export default ManageRequest;