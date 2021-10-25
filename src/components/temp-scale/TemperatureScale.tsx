import { useEffect, useState } from "react";
import { temperature } from "../../redux/features/actions/tempAction";
import { tempUnit } from "../../redux/features/actions/unitAction";
import { useAppDispatch } from "../../redux/hooks/hooks";

export default function TemperatureScale() {
  const dispatch = useAppDispatch();
  const [unitType, setUnitType] = useState("celsius");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueType = e.target.value;
    setUnitType(valueType);
    dispatch(tempUnit(valueType));
  };

  return (
    <div className=" w-full flex   items-center justify-between text-yellow-800 font-myFontBold font-extra-black  ">
      <form className="flex items-center justify-between  w-1/3 md:w-52">
        <input
          type="radio"
          name="temp"
          value="celsius"
          checked={unitType === "celsius"}
          onChange={handleChange}
        />
        <label htmlFor="celsius" className="flex mr-4">
          <span className=" hidden md:flex ">Celsius </span>(°C)
        </label>
        <input
          type="radio"
          name="temp"
          value="farenheit"
          className=" "
          onChange={handleChange}
        />
        <label htmlFor="farenheit" className="flex">
          <span className=" hidden md:flex">Farenheit</span> (°F)
        </label>
      </form>

      <button
        className="bg-gray-200 p-2  shadow-lg rounded-lg  md:transform hover:-translate-y-1 
      hover:scale-105 transition duration-500 ease-in-out"
        onClick={() => dispatch(temperature())}
      >
        Refresh
      </button>
    </div>
  );
}
