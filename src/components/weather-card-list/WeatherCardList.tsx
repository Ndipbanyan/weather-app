import { useAppSelector } from "../../redux/hooks/hooks";
import { ICON_URL } from "../../utilities/Constants";
import { kelvinToC, kelvinToF } from "../../utilities/helpers";
import WeatherCard from "../weather-card/WeatherCard";
import { Prop } from "../weather-card/WeatherCard";
const WeatherCardList = () => {
  const { data } = useAppSelector((state) => state.weather);
  const value = "celsius";
  return (
    <ul className="md:flex items-center">
      {data.map((temp: Prop, idx: number) => {
        const { day, description, Avg_temp, icon } = temp;
        return (
          <WeatherCard
            key={idx}
            day={day}
            Avg_temp={
              value === "celsius" ? kelvinToC(Avg_temp) : kelvinToF(Avg_temp)
            }
            description={description}
            icon={`${ICON_URL}${icon}@2x.png`}
          />
        );
      })}
    </ul>
  );
};

export default WeatherCardList;
