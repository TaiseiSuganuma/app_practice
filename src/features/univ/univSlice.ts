import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import mock from "mocks/$mock";

export type VotingState = {
  count: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export const initialState: VotingState = {};

const votingSlice = createSlice({
  name: "Voting",
  initialState,
  reducers: {
    fetchUnivData: (state, action: PayloadAction) => ({
      ...state,
      mock() {
        axios.get("https://google.com/v1/universities").then((university) => {
          id: university.id,
          name: uiniversity.name,
          link: university.link  
        })
      }
    }),
  },
});

export default votingSlice;
