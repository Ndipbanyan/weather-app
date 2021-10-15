import WeatherCard from "./components/weather-card/WeatherCard";
import "./tailwind/output.css";
import "./App.css";

function App() {
  return (
    <main className="App  flex items-center md:w-8/12 bg-red-400  ">
      <ul className="md:flex items-center">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </ul>
    </main>
  );
}

export default App;
