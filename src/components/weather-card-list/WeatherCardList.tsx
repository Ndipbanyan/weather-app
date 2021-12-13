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
import { log } from "console";

interface itemProp {
  id: number;
  key: number;
  day: string;
  Avg_temp: number;
  description: string;
  icon: string;
  hours: [];
  hourlytemp: [];
}

const WeatherCardList = () => {
  // const [selected, setSelected] = useState(0)
  
  const { data } = useAppSelector((state) => state.weather);
  const { unit } = useAppSelector((state) => state.unit);
  const { activeCard } = useAppSelector((state) => state.activeCard);
  const dispatch = useAppDispatch();
  

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const SetDevice = () => setIsMobile(window.innerWidth <= 600);
  useEffect(() => {
    dispatch(setData(data[0]))
    window.addEventListener("resize", SetDevice);
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
    <section data-testid="card" className="">
      <Slider {...settings} className="relative px-8 ">
        {data.map((temp: itemProp, idx: number) => {
          const {id,key, day, description, Avg_temp, icon } = temp;
          return (
            <WeatherCard
              key={key}
              day={day}
              Avg_temp={tempUnitConverter(Avg_temp, unit)}
              description={description}
              isSelected={activeCard.id===id}
              icon={`${ICON_URL}${icon}@2x.png`}
              onClick={() => {
                // setSelected(idx)
                console.log(temp)
                dispatch(setData(temp))
              }}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default WeatherCardList;
