import { AppDispatch } from "../../store";
import { setUnit } from "../reducers/unitSlice";

export const tempUnit = (unit: string) => async (dispatch: AppDispatch) => {
  dispatch(setUnit(unit));
};
