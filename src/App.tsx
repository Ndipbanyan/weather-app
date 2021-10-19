import "./tailwind/output.css";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { useEffect, useState } from "react";
import { temperature } from "./redux/features/actions/tempAction";
import Loading from "./components/loading/Loading";
import WeatherApp from "./components/weather-app/WeatherApp";
import ErrorOccured from "./components/error/Error";

function App() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(temperature());
  }, []);
  const renderContent = (): JSX.Element => {
    if (status === "loading") return <Loading />;
    if (status === "success") return <WeatherApp />;
    if (status === "failed") return <ErrorOccured />;

    return <></>;
  };
  return (
    <main className="App  h-screen w-screen flex flex-col items-center justify-center md:w-8/12 relative pb-10 px-4">
      {renderContent()}
    </main>
  );
}

export default App;
