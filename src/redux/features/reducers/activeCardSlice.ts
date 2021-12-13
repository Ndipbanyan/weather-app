import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  error: false,
  status: "",
  activeCard: {
    id:0,
    key: 0,
    day: "",
    Avg_temp: 0,
    description: "",
    icon: "",
    hourlytemp: [],
    hours: [],
  },
  selectedCard:0
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
