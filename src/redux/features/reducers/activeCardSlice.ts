import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  error: false,
  status: "",
  activeCard: {
    id: 1634709600,
    day: "Wed, October 20",
    Avg_temp: 288,
    description: "moderate rain",
    icon: "10n",
    hourlytemp: [288.9, 289.15, 290.03, 289.05, 286.82, 284.73],
    hours: ["07:10", "10:10", "13:10", "16:10", "19:10", "22:10"],
  },
};
const ActiveCardSlice = createSlice({
  name: "activeCard",
  initialState,
  reducers: {
    setActiveCard: (state, { payload }) => {
      state.activeCard = payload;
      state.status = "success";
    },
  },
});

const { reducer, actions } = ActiveCardSlice;
export const { setActiveCard } = actions;

export default reducer;
