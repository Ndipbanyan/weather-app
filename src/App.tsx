import "./tailwind/output.css";
import "./App.css";

import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { useEffect } from "react";
import { fetchTemperatureData } from "./redux/features/actions/tempAction";
import Loading from "./components/loading/Loading";
import WeatherApp from "./components/weather-app/WeatherApp";
import ErrorOccurred from "./components/error/Error";

function App() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchTemperatureData());
  }, []);
  const renderContent = (): JSX.Element => {
    return status === "loading" ? (
      <Loading />
    ) : status === "success" ? (
      <WeatherApp />
    ) : (
      <ErrorOccurred />
    );
  };
  return (
    <main
      data-testid="weather-app"
      className={`h-screen w-screen flex flex-col items-center ${
        status !== "success" ? "justify-center" : ""
      } `}
    >
      {renderContent()}
    </main>
  );
}

export default App;
