import { combineReducers, configureStore } from "@reduxjs/toolkit";
import company from "../reducer/company";
import fetch from "../reducer/fetch";

const globalReducer = combineReducers({
  company: company,
  fetch: fetch,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
