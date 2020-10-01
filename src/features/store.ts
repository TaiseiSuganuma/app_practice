import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import univsSlice from "./univ/univsSlice";

export const rootReducer = combineReducers({
  univ: univsSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof rootReducer>;
export default store;
