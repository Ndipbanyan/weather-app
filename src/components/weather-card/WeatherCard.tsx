import React from "react";
import { BsCloudSun } from "react-icons/bs";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";

const WeatherCard = () => {
  return (
    // <IconContext.Provider
    //   value={{ style: { verticalAlign: "middle", fontSize: "2rem" } }}
    // >
    <li className=" bg-gray-200 text-red-900  md:h-52 md:w-64 p-4 m-4 shadow-lg rounded-lg  ">
      <div className="w-full flex  items-center ">
        {" "}
        <div className=" w-full flex  items-center justify-center w-20 h-24">
          <span className="text-yellow-800 text-8xl font-extra-black font-myFontBold">
            28
          </span>
          <div className="text-xs">
            <span className="mb-4 text-yellow-600 text-2xl">°C</span>
            <span className="flex items-center text-yellow-600">
              <HiOutlineArrowNarrowUp />
              <span className="text-red-900 mb-2 font-myFont">28°C</span>
            </span>
            <span className="flex items-center text-yellow-600">
              <HiOutlineArrowNarrowDown />
              <span className="text-red-900 text-xs font-myFont">28°C</span>
            </span>
          </div>
        </div>
      </div>

      <div className=" flex w-full items-center justify-center my-4 ">
        <span className=" block text-yellow-600 text-3xl ">
          <BsCloudSun />
        </span>
        <span className=" block ml-4 mt-2">Broken Clouds</span>
      </div>
      <span className="block mb-6 flex justify-center font-myFont">
        Fri, October 14
      </span>
    </li>
    // </IconContext.Provider>
  );
};

export default WeatherCard;
