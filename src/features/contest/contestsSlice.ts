import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContestsAPI, {
  FetchContestsRequest,
  FetchContestsResponse,
  ListContestsResponse,
} from "~/api/ContestsAPI";
import ContestsEntity from "~/entities/ContestsEntity";

const name = "contestsSlice";

export type ContestsState = {
  loadingList: boolean;
  loadingListError: boolean;
  loadingFetch: boolean;
  loadingFetchError: boolean;
  list: ContestsEntity[];
  data: ContestsEntity;
};

const initialState: ContestsState = {
  loadingList: false,
  loadingListError: false,
  loadingFetch: false,
  loadingFetchError: false,
  list: [],
  data: {},
};

const listContestsAction = createAsyncThunk<ListContestsResponse, void>(
  `${name}/listContestsAction`,
  (): Promise<ListContestsResponse> => ContestsAPI.list()
);

const fetchContestsAction = createAsyncThunk<
  FetchContestsResponse,
  FetchContestsRequest
>(
  `${name}/fetchContestsAction`,
  (payload): Promise<FetchContestsResponse> => ContestsAPI.fetch(payload)
);

const contestsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [listContestsAction.pending.type]: (
      state: ContestsState
    ): ContestsState => ({
      ...state,
      loadingList: true,
      loadingListError: false,
    }),
    [listContestsAction.fulfilled.type]: (
      state: ContestsState,
      action: PayloadAction<ListContestsResponse>
    ): ContestsState => ({
      ...state,
      loadingList: false,
      list: action.payload,
    }),
    [listContestsAction.rejected.type]: (
      state: ContestsState
    ): ContestsState => ({
      ...state,
      loadingList: false,
      loadingListError: true,
      list: [],
    }),
    [fetchContestsAction.pending.type]: (
      state: ContestsState
    ): ContestsState => ({
      ...state,
      loadingList: true,
      loadingListError: false,
    }),
    [fetchContestsAction.fulfilled.type]: (
      state: ContestsState,
      action: PayloadAction<ListContestsResponse>
    ): ContestsState => ({
      ...state,
      loadingList: false,
      data: action.payload,
    }),
    [fetchContestsAction.rejected.type]: (
      state: ContestsState
    ): ContestsState => ({
      ...state,
      loadingList: false,
      loadingListError: true,
      data: {},
    }),
  },
});

export const actions = {
  ...contestsSlice.actions,
  listContestsAction,
  fetchContestsAction,
};
export default contestsSlice;
