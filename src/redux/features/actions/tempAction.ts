import {
  tempFailure,
  tempPending,
  tempSuccess,
} from "../reducers/DayTempSLice";

import { weatherApi } from "../../../api/weatherApi";
import { AppDispatch } from "../../store";
import { AxiosResponse } from "axios";

export const temperature = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(tempPending());
    const dayTemp: AxiosResponse<any> = await weatherApi();

    if (dayTemp.status === 200) {
      dispatch(tempSuccess(dayTemp.data));
    } else {
      dispatch(tempFailure(dayTemp.data));
    }
  } catch (error) {
    dispatch(tempFailure(error));
    console.log(error);
  }
};
