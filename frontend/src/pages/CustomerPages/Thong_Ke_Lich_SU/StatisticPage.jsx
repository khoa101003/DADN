import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data.js";
import LineChart from './LineChart.jsx';
import { Row, Col, Dropdown, DropdownButton, Form, Button } from "react-bootstrap";
import SideBar from "../../../components/GlobalStyles/SideBar.jsx";

Chart.register(CategoryScale);

function StatisticPage() { 
  const containerStyle = {
    width: '80%',
  }
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.time), 
    datasets: [
      {
        label: "Nhiệt độ (oC)",
        fill: true,
        data: Data.map((data) => data.measure),
        borderColor: "red",
        borderWidth: 2,
        backgroundColor: 'rgb(255,0,0,0.25)'
      }
    ]
  });
 
  return (
    <div className="row mx-auto container">
      <SideBar />
      <div className='col-xl-9 col-md-9 mt-5 mx-auto'>
        <h1 className="text-center">Thống kê lịch sử</h1>

          <Row className="mt-4">
            <Col xs={2}>
                <Dropdown.Header>Chọn loại thiết bị</Dropdown.Header>
                <DropdownButton id="equipment-type" title="Sensor nhiệt độ">
                    <Dropdown.Item href="#/action-1">Sensor độ ẩm đất</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sensor độ ẩm không khí</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sensor ánh sáng</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Sensor nhiệt độ</Dropdown.Item>
                </DropdownButton>
            </Col>
            <Col xs={2}>
                <Dropdown.Header>Chọn thiết bị</Dropdown.Header>
                <DropdownButton id="equipment-list" title="Sensor 1">
                    <Dropdown.Item href="#/action-1">Sensor 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sensor 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sensor 3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Sensor 4</Dropdown.Item>
                </DropdownButton>
            </Col>
            <Col xs={3}>
                <Form.Group controlId="date">
                <Form.Label>Ngày bắt đầu</Form.Label>
                <Form.Control size='sm' type="date"></Form.Control>
                </Form.Group>
            </Col>
            <Col xs={3}>
                <Form.Group controlId="date">
                <Form.Label>Ngày kết thúc</Form.Label>
                <Form.Control size='sm' type="date"></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Button type='submit' size='lg' variant='secondary'>Lọc</Button>
            </Col>
          </Row>

        <div className="d-flex flex-column align-items-center mt-3">
          <LineChart style={containerStyle} chartData={chartData} />
        </div>
      </div>
    </div>
  )
}
export default StatisticPage;