import { configureStore } from "@reduxjs/toolkit";
import tempUnitReducer from "./tempUnitSlice";
import weatherApiReducer from "./weatherApiSlice";
import dayTimeReducer from "./dayTimeSlice";

export const store = configureStore({
  reducer: {
    tempUnit: tempUnitReducer,
    weatherApi: weatherApiReducer,
    dayTime: dayTimeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
