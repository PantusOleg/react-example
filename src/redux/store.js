import { combineReducers, createStore } from "redux";
import { commonReducer } from "./common";

const rootReducer = combineReducers({
  common: commonReducer,
});

export const store = createStore(rootReducer);
