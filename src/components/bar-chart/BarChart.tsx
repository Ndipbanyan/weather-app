import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../redux/hooks/hooks";
import { tempUnitConverter } from "../../utilities/helpers";

const BarChart = () => {
  const { activeCard } = useAppSelector((state) => state.activeCard);
  const { unit } = useAppSelector((state) => state.unit);

  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth < 600 ? true : false;
  });

  const SetDevice = () => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", SetDevice);
    return () => window.removeEventListener("resize", SetDevice);
  }, []);

  const Xaxis = activeCard.hours;
  const Yaxis = activeCard.hourlytemp.map((item: number) =>
    tempUnitConverter(item, unit)
  );

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
    <div className=" md:w-2/3   text-yellow-800 font-myFontBold relative h-full ">
      <h1 className="title">Temperature Statistics</h1>

      <Bar data={bardata} height={isMobile ? 250 : 150} options={options} />
    </div>
  );
};

export default BarChart;
