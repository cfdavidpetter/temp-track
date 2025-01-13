import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TempUnitState = {
  unit: "C" | "F";
}

const initialState: TempUnitState = {
  unit: "C",
};

const tempUnitSlice = createSlice({
  name: "tempUnit",
  initialState,
  reducers: {
    toggleTempUnit: (state) => {
      state.unit = state.unit === "C" ? "F" : "C";
    },
    setTempUnit: (state, action: PayloadAction<"C" | "F">) => {
      state.unit = action.payload;
    },
  },
});

export const { toggleTempUnit, setTempUnit } = tempUnitSlice.actions;
export default tempUnitSlice.reducer;
