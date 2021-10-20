import { useState } from "react";
import { setData } from "../../redux/features/actions/activeCardAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { ICON_URL } from "../../utilities/Constants";
import { kelvinToC, kelvinToF } from "../../utilities/helpers";
import Next from "../pagination/Next";
import Previous from "../pagination/Previous";
import WeatherCard from "../weather-card/WeatherCard";
const WeatherCardList = () => {
  interface itemProp {
    day: string;
    Avg_temp: number;
    description: string;
    icon: string;
    hours: [];
    hourlytemp: [];
  }
  const { data } = useAppSelector((state) => state.weather);
  const { unit } = useAppSelector((state) => state.unit);
  const dispatch = useAppDispatch();

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
  return (
    <>
      <div className={`${prevButton ? "" : "hidden"}`}>
        <Previous onClick={previous} />
      </div>
      <ul className="md:flex items-center">
        {currentTemp.map((temp: itemProp, idx: number) => {
          const { day, description, Avg_temp, icon, hourlytemp, hours } = temp;
          return (
            <WeatherCard
              key={idx}
              day={day}
              Avg_temp={
                unit === "celsius" ? kelvinToC(Avg_temp) : kelvinToF(Avg_temp)
              }
              description={description}
              icon={`${ICON_URL}${icon}@2x.png`}
              onClick={() => dispatch(setData(temp))}
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
