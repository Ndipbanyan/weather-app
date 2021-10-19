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
import WeatherCardList from "./components/weather-card-list/WeatherCardList";

function App() {
  const dispatch = useAppDispatch();
  const { status, isLoading } = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(temperature());
  }, []);
  return <></>;
}

export default App;
