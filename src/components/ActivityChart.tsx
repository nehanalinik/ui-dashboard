import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
    datasets: [
      {
        label: "Activity",
        data: [
          3000, 7000, 4000, 5000, 6000, 8000, 7000, 10000, 15000, 9000, 11000,
          7000,
        ],
        backgroundColor: "#4299e1",
        borderRadius: 5,
        barPercentage: 0.5,
        borderSkipped: false,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `${value / 1000}k`,
        },
      },
    },
  };
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">Activity</div>
        <button className="bg-gray-700 text-white py-1 px-3 rounded-lg">
          Weekly
        </button>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
