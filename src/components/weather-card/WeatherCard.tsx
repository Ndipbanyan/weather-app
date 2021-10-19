import { useAppSelector } from "../../redux/hooks/hooks";

export interface Prop {
  day: string;
  Avg_temp: number;

  description: string;
  icon: string;
}
const WeatherCard = ({ day, Avg_temp, description, icon }: Prop) => {
  const { unit } = useAppSelector((state) => state.unit);
  return (
    <li className=" bg-gray-200 text-red-900  md:h-52 md:w-64 p-2 m-4 shadow-lg rounded-lg  ">
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
