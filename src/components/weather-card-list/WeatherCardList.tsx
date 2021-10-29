import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import { useEffect, useState } from "react";
import { setData } from "../../redux/features/actions/activeCardAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { ICON_URL } from "../../utilities/Constants";
import { tempUnitConverter } from "../../utilities/helpers";
import Next from "../pagination/Next";
import Previous from "../pagination/Previous";
import WeatherCard from "../weather-card/WeatherCard";

interface itemProp {
  day: string;
  Avg_temp: number;
  description: string;
  icon: string;
  hours: [];
  hourlytemp: [];
}

const WeatherCardList = () => {
  const { data } = useAppSelector((state) => state.weather);
  const { unit } = useAppSelector((state) => state.unit);
  const dispatch = useAppDispatch();
  dispatch(setData(data[0]));

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const SetDevice = () => setIsMobile(window.innerWidth <= 600);

    window.addEventListener("resize", SetDevice);

    SetDevice();

    return () => window.removeEventListener("resize", SetDevice);
  }, []);

  var settings = {
    dots: false,
    autoplay: false,
    speed: 400,
    infinite: false,
    nextArrow: (
      <span className="bg-red-400">
        <Next />
      </span>
    ),
    prevArrow: <Previous />,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
  };

  return (
    <section className="">
      <Slider {...settings} className="relative px-8 ">
        {data.map((temp: itemProp, idx: number) => {
          const { day, description, Avg_temp, icon } = temp;
          return (
            <WeatherCard
              key={idx}
              day={day}
              Avg_temp={tempUnitConverter(Avg_temp, unit)}
              description={description}
              icon={`${ICON_URL}${icon}@2x.png`}
              onClick={() => dispatch(setData(temp))}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default WeatherCardList;
