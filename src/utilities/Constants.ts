import { List } from "./interface";
export const BASE_URL =
  "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=";
export const ICON_URL = "https://openweathermap.org/img/wn/";

export enum StatusType {
  PENDING = "pending",
  REJECTED = "rejected",
  FULFILLED = "fulfilled",
}

export enum UnitType {
  CELSIUS = "C",
  FAHRENHEIT = "F",
}

export type WeatherState = {
  city: string;
  status: StatusType;
  activeUnit: UnitType;
  activeCard: List | null;
  weatherByDays: List[][];
};

export const initialState: WeatherState = {
  city: "",
  activeCard: null,
  weatherByDays: [],
  status: StatusType.PENDING,
  activeUnit: UnitType.FAHRENHEIT,
};
