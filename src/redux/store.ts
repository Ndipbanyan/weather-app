import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/reducers/weatherSlice";
import unitReducer from "./features/reducers/unit.slice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    unit: unitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
