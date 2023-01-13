import { Fragment } from "react";
import Link from "next/link";
// import styles from "../styles/index.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from "react-chartjs-2";

function ChartsPage() {
  function generateGrowthData(viewPerDay, totalDays: number) {
    var totalViewsArray = [viewPerDay];

    for (var i = 1; i < totalDays; i++) {
      var videoCount = i + 1;
      var totalViews = totalViewsArray[i - 1] + videoCount * viewPerDay;
      totalViewsArray.push(totalViews);
    }
    return totalViewsArray;
  }

  //   console.log(generateGrowthData(10, 4));

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Title",
        color: "white",
        font: {
          size: 18,
        },
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
        borderColor: "lightblue",
        fill: "start",
        backgroundColor: "lightblue",
      },
      point: {
        radius: 10,
        hitRadius: 10,
      }
    },
    scales: {
      x: {
        display: true,
        ticks: {
          color: "white",
        },
      },
      y: {
        display: true,
        ticks: {
          color: "white",
        },
      },
    },
  };

  var defaultData = {
    labels: [Array.from(Array(100).keys())], //[1,2,3,4...100] Array.from(Array(100).keys())
    datasets: [{ data: generateGrowthData(10, 100) }],
  };

  return (
    <div>
      <Line data={defaultData} width={100} height={40} options={options}></Line>
    </div>
  );
}

export default ChartsPage;
