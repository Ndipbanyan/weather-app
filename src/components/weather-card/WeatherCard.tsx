import { useAppSelector } from "../../redux/hooks/hooks";

export interface Prop {
  day: string;
  Avg_temp: number;
  description: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}
const WeatherCard = ({ day, Avg_temp, description, icon, isSelected,onClick }: Prop) => {
  const { unit } = useAppSelector((state) => state.unit);
  return (
    <li
      className={` ${isSelected? "border border-red-500":""} bg-gray-200 card-hover  text-red-900 md:h-52 mx-2 pt-2 md:pt-0
      md:w-64 my-4 md:my-3 md:mx-auto shadow-lg rounded-lg md:transform hover:-translate-y-1
      hover:scale-105 transition duration-500 ease-in-out list-none` }
      onClick={onClick}
    >
      <span className="block flex justify-center font-myFont mb-4">{day}</span>

      <div className=" w-full flex  items-center justify-center text-5xl text-yellow-800 font-extra-black font-myFontBold">
        <span className="  ">
          {Avg_temp}
          <span className=" ">{unit === "celsius" ? "°C" : "°F"}</span>
        </span>
      </div>
      <div className="flex w-full items-center  ">
        <img src={icon} alt="day's weather" className="" />
        <span className=" block ml-2 capitalize">{description}</span>
      </div>
    </li>
  );
};

export default WeatherCard;
