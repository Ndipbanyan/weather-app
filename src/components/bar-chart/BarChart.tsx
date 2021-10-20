import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../redux/hooks/hooks";
import { kelvinToC, kelvinToF } from "../../utilities/helpers";

const BarChart = () => {
  const { activeCard } = useAppSelector((state) => state.activeCard);
  const { unit } = useAppSelector((state) => state.unit);

  const Xaxis = activeCard.hours;
  const Yaxis =
    unit === "celsius"
      ? activeCard.hourlytemp.map((item: number) => kelvinToC(item))
      : activeCard.hourlytemp.map((item: number) => kelvinToF(item));

  const bardata = {
    labels: Xaxis,
    datasets: [
      {
        label: `${activeCard.day}`,
        data: Yaxis,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="header text-yellow-800 font-myFontBold">
      <h1 className="title">Temperature Statistics</h1>

      <Bar data={bardata} options={options} />
    </div>
  );
};

export default BarChart;
