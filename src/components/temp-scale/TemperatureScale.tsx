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
    <div className=" w-full flex  items-center justify-between text-yellow-800 font-myFontBold font-extra-black  ">
      <form className="flex">
        <div>
          <input
            type="radio"
            name="temp"
            value="celsius"
            className=" mr-2 "
            onChange={handleChange}
          />
          <label htmlFor="celsius" className=" mr-2">
            Celsius(°C)
          </label>
          <input
            type="radio"
            name="temp"
            value="farenheit"
            className=" mr-2"
            onChange={handleChange}
          />
          <label htmlFor="farenheit">Farenheit(°F)</label>
        </div>
        <div className="ml-6"></div>
      </form>

      <button
        className="bg-gray-200 p-2  shadow-lg rounded-lg mr-14"
        onClick={() => dispatch(temperature())}
      >
        Refresh
      </button>
    </div>
  );
}
