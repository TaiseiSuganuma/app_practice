import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import UnivsAPI, {
  FetchUnivsRequest,
  FetchUnivsResponse,
  ListUnivsResponse,
} from "~/api/UnivsAPI";
import UnivsEntity from "~/entities/UnivsEntity";

const name = "univsSlice";

export type UnivsState = {
  loadingList: boolean;
  loadingListError: boolean;
  loadingFetch: boolean;
  loadingFetchError: boolean;
  list: UnivsEntity[];
  data: UnivsEntity;
};

const initialState: UnivsState = {
  loadingList: false,
  loadingListError: false,
  loadingFetch: false,
  loadingFetchError: false,
  list: [],
  data: {},
};

const listUnivsAction = createAsyncThunk<ListUnivsResponse, void>(
  `${name}/listUnivsAction`,
  (): Promise<ListUnivsResponse> => UnivsAPI.list()
);

const fetchUnivsAction = createAsyncThunk<
  FetchUnivsResponse,
  FetchUnivsRequest
>(
  `${name}/fetchUnivsAction`,
  (payload): Promise<FetchUnivsResponse> => UnivsAPI.fetch(payload)
);

const univsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [listUnivsAction.pending.type]: (state: UnivsState): UnivsState => ({
      ...state,
      loadingList: true,
      loadingListError: false,
    }),
    [listUnivsAction.fulfilled.type]: (
      state: UnivsState,
      action: PayloadAction<ListUnivsResponse>
    ): UnivsState => ({
      ...state,
      loadingList: false,
      list: action.payload,
    }),
    [listUnivsAction.rejected.type]: (state: UnivsState): UnivsState => ({
      ...state,
      loadingList: false,
      loadingListError: true,
      list: [],
    }),
    [fetchUnivsAction.pending.type]: (state: UnivsState): UnivsState => ({
      ...state,
      loadingList: true,
      loadingListError: false,
    }),
    [fetchUnivsAction.fulfilled.type]: (
      state: UnivsState,
      action: PayloadAction<ListUnivsResponse>
    ): UnivsState => ({
      ...state,
      loadingList: false,
      data: action.payload,
    }),
    [fetchUnivsAction.rejected.type]: (state: UnivsState): UnivsState => ({
      ...state,
      loadingList: false,
      loadingListError: true,
      data: {},
    }),
  },
});

export const actions = {
  ...univsSlice.actions,
  listUnivsAction,
  fetchUnivsAction,
};
export default univsSlice;
