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
    [listUnivsAction.pending.type]: (state: )
  }
})