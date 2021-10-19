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
    if (response) {
      const result = groupBy(response.data.list, monthName);

      const data: {}[] = [];
      for (const date in result) {
        let sum = 0;
        let time = [];
        let hourtemp = [];

        for (let i = 0; i < result[date].length; i++) {
          sum += result[date][i].main.temp;
          let timearr = result[date][i].dt;
          time.push(timeFromTimestamp(timearr));
          hourtemp.push(result[date][i].main.temp);
        }
        const obj = {
          id: result[date][0].dt,
          day: date,
          Avg_temp: Math.floor(sum / result[date].length),
          description: result[date][0].weather[0].description,
          icon: result[date][0].weather[0].icon,
          hourlytemp: hourtemp,
          hours: time,
        };

        data.push(obj);
      }

      dispatch(tempSuccess(data));
    }
  } catch (error) {
    dispatch(tempFailure("Oops, something went Wrong..."));
    console.log(error);
  }
};
