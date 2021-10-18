import WeatherCard from "./components/weather-card/WeatherCard";
import "./tailwind/output.css";
import "./App.css";

import BarChart from "./components/bar-chart/BarChart";
import Previous from "./components/pagination/Previous";
import Next from "./components/pagination/Next";
import TemperatureScale from "./components/temp-scale/TemperatureScale";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { useEffect } from "react";
import { temperature } from "./redux/features/actions/tempAction";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(temperature());
  });
  return (
    <main className="App  h-screen w-screen flex flex-col items-center md:w-8/12 relative py-4">
      <div className=" absolute md:right-5">
        <TemperatureScale />
      </div>
      <div className="flex items-center mt-10">
        <Previous />
        <ul className="md:flex items-center">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </ul>
        <Next />
      </div>
      <div className="mt-5 mb-6 md:h-2/5 md:w-5/6  h-5/6 w-5/6">
        <BarChart />
      </div>
    </main>
  );
}

export default App;
