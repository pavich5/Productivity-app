import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./BarChart.css";

const BarChart = () => {
  // Dummy data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
    // indexAxis: "y", // Set the index axis to 'y' for left-aligned labels
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

  return (
    <div className="bar-chart">
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
