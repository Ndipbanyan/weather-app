import { useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { ICON_URL } from "../../utilities/Constants";
import { kelvinToC, kelvinToF } from "../../utilities/helpers";
import Next from "../pagination/Next";
import Previous from "../pagination/Previous";
import WeatherCard from "../weather-card/WeatherCard";
import { Prop } from "../weather-card/WeatherCard";
const WeatherCardList = () => {
  const { data } = useAppSelector((state) => state.weather);
  const { unit } = useAppSelector((state) => state.unit);

  const Page = data.slice(0, 3);
  const [startIndex, setStartIndex] = useState(3);
  const [endIndex, setEndIndex] = useState(6);
  const [currentTemp, setCurrentTemp] = useState(Page);
  const [nextButton, setNextButton] = useState(true);
  const [prevButton, setPrevButton] = useState(false);
  const next = () => {
    setPrevButton(true);
    if (endIndex >= data.length) {
      setNextButton(false);
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3);
    } else {
      setStartIndex(startIndex + 3);
      setEndIndex(endIndex + 3);
    }
    setCurrentTemp(data.slice(startIndex, endIndex));
  };
  const previous = () => {
    setNextButton(true);
    if (startIndex <= 0) {
      setStartIndex(startIndex + 3);
      setEndIndex(endIndex + 3);
      setPrevButton(false);
    } else {
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3);
    }
    setCurrentTemp(data.slice(startIndex, endIndex));
  };

  console.log(unit);
  return (
    <>
      <div className={`${prevButton ? "" : "hidden"}`}>
        <Previous onClick={previous} />
      </div>
      <ul className="md:flex items-center">
        {currentTemp.map((temp: Prop, idx: number) => {
          const { day, description, Avg_temp, icon } = temp;
          return (
            <WeatherCard
              key={idx}
              day={day}
              Avg_temp={
                unit === "celsius" ? kelvinToC(Avg_temp) : kelvinToF(Avg_temp)
              }
              description={description}
              icon={`${ICON_URL}${icon}@2x.png`}
            />
          );
        })}
      </ul>
      <div className={`${nextButton ? "" : "hidden"}`}>
        <Next onClick={next} />
      </div>
    </>
  );
};

export default WeatherCardList;
