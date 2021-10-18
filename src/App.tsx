import WeatherCard from "./components/weather-card/WeatherCard";
import "./tailwind/output.css";
import "./App.css";
import {
  tempFailure,
  tempPending,
  tempSuccess,
} from "./redux/features/reducers/DayTempSLice";
import BarChart from "./components/bar-chart/BarChart";
import Previous from "./components/pagination/Previous";
import Next from "./components/pagination/Next";
import TemperatureScale from "./components/temp-scale/TemperatureScale";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { oneCallApi } from "./api/weatherApi";

function App() {
  const dispatch = useAppDispatch();
  const temperature = () => async () => {
    try {
      dispatch(tempPending());
      const dayTemp: AxiosResponse<any> = await oneCallApi();
      if (dayTemp) {
        dispatch(tempSuccess(dayTemp.data));
      } else {
        dispatch(tempFailure(dayTemp));
      }
    } catch (error) {
      dispatch(tempFailure(error));
    }
  };
  useEffect(() => {
    temperature();
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
