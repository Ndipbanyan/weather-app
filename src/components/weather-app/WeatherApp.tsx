import BarChart from "../bar-chart/BarChart";
import Next from "../pagination/Next";
import Previous from "../pagination/Previous";
import TemperatureScale from "../temp-scale/TemperatureScale";
import WeatherCardList from "../weather-card-list/WeatherCardList";

const WeatherApp = () => {
  return (
    <main className="App  h-screen w-screen flex flex-col items-center md:w-8/12 relative py-4">
      <div className=" absolute md:right-5">
        <TemperatureScale />
      </div>
      <div className="flex items-center mt-10">
        <Previous />
        <WeatherCardList />
        <Next />
      </div>
      <div className="mt-5 mb-6 md:h-2/5 md:w-5/6  h-5/6 w-5/6">
        <BarChart />
      </div>
    </main>
  );
};

export default WeatherApp;
