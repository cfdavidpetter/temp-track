import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WeatherApiState = {
  api: "openweather" | "weatherstack";
};

const initialState: WeatherApiState = {
  api: "openweather", 
};

const weatherApiSlice = createSlice({
  name: "weatherApi",
  initialState,
  reducers: {
    setWeatherApi: (state, action: PayloadAction<"openweather" | "weatherstack">) => {
      state.api = action.payload;
    },
  },
});

export const { setWeatherApi } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
