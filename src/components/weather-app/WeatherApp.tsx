import BarChart from "../bar-chart/BarChart";
import TemperatureScale from "../temp-scale/TemperatureScale";
import WeatherCardList from "../weather-card-list/WeatherCardList";

const WeatherApp = () => {
  return (
    <section className=" w-4/5 h-screen flex text-red-900 flex-col items-center ">
      <h1 className=" font-myfontBold text-5xl mt-2 flex items-center justify-center">
        Weather App
      </h1>
      <div className="w-full  flex items-center">
        <TemperatureScale />
      </div>
      <p>Showing Weather information for Lagos, Nigeria</p>
      <div className=" w-full flex  items-center">
        <WeatherCardList />
      </div>
      <div className=" w-full  mt-2   flex items-center justify-center">
        <BarChart />
      </div>
    </section>
  );
};

export default WeatherApp;
