import { useState } from "react";
import { fetchTemperatureData } from "../../redux/features/actions/tempAction";
import { setTemperatureUnit } from "../../redux/features/actions/unitAction";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { TemperatureUnit } from "../../utilities/Constants";

export default function TemperatureScale() {
  const dispatch = useAppDispatch();
  const [unitType, setUnitType] = useState<string>(TemperatureUnit.CELSIUS);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueType = e.target.value;
    setUnitType(valueType);
    dispatch(setTemperatureUnit(valueType));
  };

  return (
    <div className=" w-full flex   items-center justify-between text-yellow-800 font-myFontBold font-extra-black  ">
      <form className="flex items-center">
        <input
          type="radio"
          name="temp"
          value={TemperatureUnit.CELSIUS}
          checked={unitType === TemperatureUnit.CELSIUS}
          onChange={handleChange}
        />
        <label htmlFor="celsius" className="flex mr-4 ml-1">
          <span className=" hidden md:flex mr-1">Celsius</span>(°C)
        </label>
        <input
          type="radio"
          name="temp"
          value={TemperatureUnit.FAHRENHEIT}
          className=" "
          onChange={handleChange}
        />
        <label htmlFor="fahrenheit" className="flex ml-1">
          <span className=" hidden md:flex mr-1">Fahrenheit</span> (°F)
        </label>
      </form>

      <button
        className="bg-gray-200 p-2  shadow-lg rounded-lg  md:transform hover:-translate-y-1 
      hover:scale-105 transition duration-500 ease-in-out"
        onClick={() => dispatch(fetchTemperatureData())}
      >
        Refresh
      </button>
    </div>
  );
}
