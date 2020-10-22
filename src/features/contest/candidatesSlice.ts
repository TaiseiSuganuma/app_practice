import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CandidatesAPI, {
  FetchCandidatesRequest,
  FetchCandidatesResponse,
  ListCandidatesResponse,
} from "~/api/CandidatesAPI";
import CandidatetsEntity from "~/entities/CandidatesEntity";

const name = "candidatesSlice";

export type CandidatesState = {
  loadingList: boolean;
  loadingListError: boolean;
  loadingFetch: boolean;
  loadingFetchError: boolean;
  list: CandidatesEntity[];
  data: CandidatesEntity;
};

const initialState: CandidatesState = {
  loadingList: false,
  loadingListError: false,
  loadingFetch: false,
  loadingFetchError: false,
  list: [],
  data: {},
};

const listContesntsAction = createAsyncThunk<ListContestsResponse, void>(
  `${name}/listCandidatesAction`,
  (): Promise<ListContestsResponse> => CandidatesAPI.list()
);
