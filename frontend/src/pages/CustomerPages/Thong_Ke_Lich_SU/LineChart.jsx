import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  const containerStyle = {
    width: '80%',
  }

  return (
    <div style={containerStyle}>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Nhiệt độ (oC)"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;