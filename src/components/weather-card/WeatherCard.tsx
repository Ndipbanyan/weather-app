import React from "react";

const WeatherCard = () => {
  return (
    <li className=" bg-white md:h-52 md:w-56 p-4 m-4 shadow-lg rounded-lg">
      <span className="flex justify-between">
        <span className="block">Japan</span>
        <span className="block">Fri, October 14</span>
      </span>

      <span className="block">
        <span className="">28</span>
        <span>°C</span>
      </span>

      <span className="block">img</span>
      <span className="block">Broken Clouds</span>
    </li>
  );
};

export default WeatherCard;
