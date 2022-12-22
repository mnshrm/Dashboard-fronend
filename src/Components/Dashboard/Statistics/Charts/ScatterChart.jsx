import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () => {
  return (
    <Scatter
      data={{
        datasets: [
          {
            label: "Scatter Dataset",
            data: [
              {
                x: -10,
                y: 0,
              },
              {
                x: 0,
                y: 10,
              },
              {
                x: 10,
                y: 5,
              },
              {
                x: 0.5,
                y: 5.5,
              },
              {
                x: 1,
                y: 2.5,
              },
              {
                x: 5,
                y: 2.2,
              },
            ],
            backgroundColor: "rgb(255, 99, 132)",
          },
        ],
      }}
      options={{
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
        },
      }}
    />
  );
};

export default PieChart;
