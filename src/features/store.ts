import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import contestsSlice from "./contest/contestsSlice";

export const rootReducer = combineReducers({
  contest: contestsSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof rootReducer>;
export default store;
