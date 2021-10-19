import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  status: "",
  data: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    tempPending: (state) => {
      state.isLoading = true;
      state.status = "loading";
    },
    tempSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.data = payload;
    },
    tempFailure: (state, { payload }) => {
      state.isLoading = false;
      state.status = "failed";
      state.data = payload;
    },
  },
});

const { reducer, actions } = weatherSlice;
export const { tempPending, tempSuccess, tempFailure } = actions;

export default reducer;
