import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./BarChart.css";
import Button from "../Button/Button";

const BarChart = () => {
  const [chartType, setChartType] = useState("bar"); // State variable to track the chart type

  // Dummy data for the chart
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 250, 345, 12, 45, 67, 89],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [35, 41, 50, 49, 28, 37, 250, 345, 12, 45, 67, 89],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "left",
      },
    },
  };

  const handleChartToggle = () => {
    setChartType((prevChartType) =>
      prevChartType === "bar" ? "doughnut" : "bar"
    );
  };

  return (
    <div className="bar-chart">
      <h2>Chart Example</h2>
      {chartType === "bar" ? (
        <Bar data={data} options={options} />
      ) : (
        <Doughnut data={data} options={options} />
      )}
      <Button onBtnClick={handleChartToggle} btnText='Toggle Chart' className='toggleChartBtn'/>

    </div>
  );
};

export default BarChart;
