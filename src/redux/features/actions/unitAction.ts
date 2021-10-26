import { AppDispatch } from "../../store";
import { setUnit } from "../reducers/unitSlice";

export const setTemperatureUnit = (unit: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(setUnit(unit));
};
