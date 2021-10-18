import moment from "moment";

export const kelvinToC = (kelvin: number) => Math.round(kelvin - 273);
export const kelvinToF = (kelvin: number) =>
  Math.round(((kelvin - 273.15) * 9) / 5 + 32);

// Get date from Unix timestamp
export const dateFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return moment(date).format("ddd, MMMM DD");
};

// Get time from Unix timestamp
export const timeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return moment(date).format("HH:MM");
};

export const monthName = (item: any) => {
  return dateFromTimestamp(item.dt);
};

// export const result = groupBy(data, monthName);