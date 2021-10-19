import { useState } from "react";

export default function TemperatureScale() {
  const [unit, setUnit] = useState("celsius");
  return (
    <div className=" w-full flex  items-center justify-between mt-4">
      <form className="flex">
        <div>
          <input type="radio" name="temp" value="celsius" className=" mr-2" />
          <label htmlFor={unit} className=" mr-2">
            Celsius(°C)
          </label>
          <input type="radio" name="temp" value="farenheit" className=" mr-2" />
          <label htmlFor="farenheit">Farenheit(°F)</label>
        </div>
        <div className="ml-6"></div>
      </form>

      <button className="bg-gray-200 p-2  shadow-lg rounded-lg">Refresh</button>
    </div>
  );
}
