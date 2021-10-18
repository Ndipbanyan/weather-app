import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  status: "",
  data: [],
};

const oneCallSlice = createSlice({
  name: "dayTemperature",
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
    },
  },
});

const { reducer, actions } = oneCallSlice;
export const { tempPending, tempSuccess, tempFailure } = actions;

export default reducer;
