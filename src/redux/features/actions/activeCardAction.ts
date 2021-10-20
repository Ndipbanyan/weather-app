import { AppDispatch } from "../../store";
import { setActiveCard } from "../reducers/activeCardSlice";

export const setData = (data: {}) => async (dispatch: AppDispatch) => {
  dispatch(setActiveCard(data));
};
