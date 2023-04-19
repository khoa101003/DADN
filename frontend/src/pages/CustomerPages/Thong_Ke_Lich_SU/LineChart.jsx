import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  const containerStyle = {
    width: '90%',
  }

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    hourCycle: 'h12',
  };

  return (
    <div style={containerStyle}>
      <Line
        data={{
          labels: chartData.map((data) => new Date(data.log_time).toLocaleString('en-US', options)),
          datasets: [
                {
                  label: "Nhiệt độ (oC)",
                  fill: true,
                  data: chartData.map((data) => data.value),
                  borderColor: "red",
                  borderWidth: 2,
                  backgroundColor: 'rgb(255,0,0,0.25)'
                }
              ]
        }}
        options={{
          plugins: {
            legend: {
              display: true
            }
          },
          // Change font size
          scales: {
            x: {
              ticks: {
                maxTicksLimit: 10,
                font: {
                  size: 8,
                }
              }
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;