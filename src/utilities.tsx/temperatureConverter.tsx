// Convert degree Kelvin to degree Celsius

export const kelvinToC = (kelvin: number) => Math.round(kelvin - 273);
export const kelvinToF = (kelvin: number) =>
  Math.round(((kelvin - 273.15) * 9) / 5 + 32);
