import BarChart from "../bar-chart/BarChart";
import TemperatureScale from "../temp-scale/TemperatureScale";
import WeatherCardList from "../weather-card-list/WeatherCardList";

const WeatherApp = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center  ">
        <TemperatureScale />
      </div>
      <div className="flex  items-center">
        <WeatherCardList />
      </div>
      <div className="mt-5 mb-6 md:h-2/5 md:w-5/6  h-5/6 w-5/6">
        <BarChart />
      </div>
    </>
  );
};

export default WeatherApp;
