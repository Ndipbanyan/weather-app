import BarChart from "../bar-chart/BarChart";
import TemperatureScale from "../temp-scale/TemperatureScale";
import WeatherCardList from "../weather-card-list/WeatherCardList";

const WeatherApp = () => {
  return (
    <section className=" md:w-4/5 md:px-0 px-2 w-full h-screen flex text-red-900 flex-col items-center ">
      <h1 className=" font-myfontBold text-3xl md:text-5xl mt-4 md:mt-2 flex items-center justify-center">
        Sky Up Weather
      </h1>
      <p className="md:my-2 my-4 text-center">
        (Showing Weather information for Lagos, Nigeria)
      </p>
      <div className="w-full  flex items-center">
        <TemperatureScale />
      </div>

      <div className=" w-full  ">
        <WeatherCardList />
      </div>
      <div className=" md:w-full mt-6 md:mt-2   flex items-center justify-center">
        <BarChart />
      </div>
    </section>
  );
};

export default WeatherApp;
