import moment from "moment";
import { TemperatureUnit } from "./Constants";

export const tempUnitConverter = (kelvin: number, unit: string) => {
  if (unit === TemperatureUnit.CELSIUS) {
    return Math.floor(kelvin - 273);
  }
  return Math.floor(((kelvin - 273.15) * 9) / 5 + 32);
};

// Get date from Unix timestamp
export const dateFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return moment(date).format("ddd, MMMM DD");
};
// Get time from Unix timestamp
export const timeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return moment(date).format("HH:mm A");
};

export const monthName = (item: { dt: number }) => {
  return dateFromTimestamp(item.dt);
};
