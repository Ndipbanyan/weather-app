export default function TemperatureScale() {
  return (
    <div className="  w-96 flex  items-center justify-between">
      <form className="flex">
        <div>
          <input type="radio" name="temp" value="celsius" className=" mr-2" />
          <label htmlFor="celsius" className=" mr-2">
            Celsius(°C)
          </label>
          <input
            type="radio"
            name="temp"
            value="fahrenheit"
            className=" mr-2"
          />
          <label htmlFor="farenheit">Farenheit(°F)</label>
        </div>
        <div className="ml-6"></div>
      </form>

      <button className="bg-gray-200 p-2  shadow-lg rounded-lg">Refresh</button>
    </div>
  );
}
