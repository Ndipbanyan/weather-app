import { useEffect, useState } from "react";
import { temperature } from "../../redux/features/actions/tempAction";
import { setUnit } from "../../redux/features/reducers/unit.slice";
import { useAppDispatch } from "../../redux/hooks/hooks";

export default function TemperatureScale() {
  const dispatch = useAppDispatch();
  const [unitType, setUnitType] = useState("");

  return (
    <div className=" w-full flex  items-center justify-between mt-4">
      <form className="flex">
        <div>
          <input
            type="radio"
            name="temp"
            value="celsius"
            className=" mr-2"
            onChange={(e) => {
              setUnitType(e.target.value);
              dispatch(setUnit(unitType));
            }}
          />
          <label htmlFor="celsius" className=" mr-2">
            Celsius(°C)
          </label>
          <input
            type="radio"
            name="temp"
            value="farenheit"
            className=" mr-2"
            onChange={(e) => {
              setUnitType(e.target.value);
              dispatch(setUnit(unitType));
            }}
          />
          <label htmlFor="farenheit">Farenheit(°F)</label>
        </div>
        <div className="ml-6"></div>
      </form>

      <button
        className="bg-gray-200 p-2  shadow-lg rounded-lg"
        onClick={() => dispatch(temperature())}
      >
        Refresh
      </button>
    </div>
  );
}
