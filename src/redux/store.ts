import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/reducers/weatherSlice";
import unitReducer from "./features/reducers/unitSlice";
import activeCardReducer from "./features/reducers/activeCardSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    unit: unitReducer,
    activeCard: activeCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
