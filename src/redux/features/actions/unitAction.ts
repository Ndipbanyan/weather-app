import { AppDispatch } from "../../store";
import { setUnit } from "../reducers/unit.slice";

export const temperature = (unit: string) => async (dispatch: AppDispatch) => {
  dispatch(setUnit(unit));
};
