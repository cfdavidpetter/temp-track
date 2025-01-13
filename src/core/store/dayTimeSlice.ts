import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DayTimeState = {
  dayIndex: number;
}

const initialState: DayTimeState = {
  dayIndex: 0,
};

const dayTimeSlice = createSlice({
  name: "dayTime",
  initialState,
  reducers: {
    setDayTime: (state, action: PayloadAction<number>) => {
      state.dayIndex = action.payload;
    },
  },
});

export const { setDayTime } = dayTimeSlice.actions;
export default dayTimeSlice.reducer;
