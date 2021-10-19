import { useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import BarChart from "../bar-chart/BarChart";
import Next from "../pagination/Next";
import Previous from "../pagination/Previous";
import TemperatureScale from "../temp-scale/TemperatureScale";
import WeatherCardList from "../weather-card-list/WeatherCardList";

const WeatherApp = () => {
  return (
    <>
      <div className="w-full ">
        <TemperatureScale />
      </div>
      <div className="flex items-center">
        <WeatherCardList />
      </div>
      <div className="mt-5 mb-6 md:h-2/5 md:w-5/6  h-5/6 w-5/6">
        <BarChart />
      </div>
    </>
  );
};

export default WeatherApp;
