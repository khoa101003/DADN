import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  const containerStyle = {
    width: '90%',
  }

  return (
    <div style={containerStyle}>
      <Line
        data={chartData}
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
                font: {
                  size: 8,
                }
              }
            },
            y: {
              min: 25
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;