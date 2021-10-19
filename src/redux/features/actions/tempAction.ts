import {
  tempFailure,
  tempPending,
  tempSuccess,
} from "../reducers/weatherSlice";

import { weatherApi } from "../../../api/weatherApi";
import { AppDispatch } from "../../store";
import groupBy from "lodash.groupby";

import { monthName, timeFromTimestamp } from "../../../utilities/helpers";
import { AxiosResponse } from "axios";

export const temperature = () => async (dispatch: AppDispatch) => {
  dispatch(tempPending());
  try {
    const response: AxiosResponse<any> = await weatherApi();
    if (response.status === 200) {
      const result = groupBy(response.data.list, monthName);

      const data = [];
      for (const date in result) {
        let sum = 0;
        let sumTempHigh = 0;
        let sumTempLow = 0;
        let time = [];

        for (let i = 0; i < result[date].length; i++) {
          sum += result[date][i].main.temp;
          sumTempHigh = result[date][i].main.temp_max;
          sumTempLow = result[date][i].main.temp_min;
          let timearr = result[date][i].dt;
          time.push(timeFromTimestamp(timearr));
        }
        const obj = {
          day: date,
          Avg_temp: Math.floor(sum / result[date].length),
          avg_temp_min: Math.floor(sumTempLow / result[date].length),
          avg_temp_max: Math.floor(sumTempHigh / result[date].length),
          hours: time,
        };

        data.push(obj);
      }

      dispatch(tempSuccess(data));
    }
  } catch (error) {
    dispatch(tempFailure("Oops, something went Wrong..."));
  }
};
