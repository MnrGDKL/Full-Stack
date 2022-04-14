import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/coubterReducer";

const reducers = combineReducers({
  counterReducer: counterReducer
});

export const combinedStores = () => {
  const store = createStore(reducers);
  return store;
}




