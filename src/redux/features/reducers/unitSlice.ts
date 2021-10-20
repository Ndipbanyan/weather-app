import { createSlice } from "@reduxjs/toolkit";

const unitSlice = createSlice({
  name: "unit",
  initialState: { unit: "celsius" },
  reducers: {
    setUnit: (state, { payload }) => {
      state.unit = payload;
    },
  },
});

const { reducer, actions } = unitSlice;
export const { setUnit } = actions;

export default reducer;
