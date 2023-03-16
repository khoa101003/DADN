import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data.js";
import LineChart from './LineChart.jsx';
import { Container } from "react-bootstrap";

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
        data: Data.map((data) => data.measure),
        borderColor: "red",
        borderWidth: 2,
        backgroundColor: 'red'
      }
    ]
  });
 
  return (
    <Container>
      <h1 className="text-center">Thống kê lịch sử</h1>

      <div className="d-flex flex-column align-items-center">
        <LineChart style={containerStyle} chartData={chartData} />
      </div>
    </Container>
  )
}
export default StatisticPage;