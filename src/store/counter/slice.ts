import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type VotingState = {
  count: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: VotingState = {
  count: 0,
  loading: false,
  error: false,
  errorMessage: "",
};

const counterSlice = createSlice({
  name: "Voting",
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
  },
});

export default counterSlice;
