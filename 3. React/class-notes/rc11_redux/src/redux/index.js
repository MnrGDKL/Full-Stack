import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer : todoReducer
});

// export const combinedStores = () => {
//   const store = createStore(reducers);
//   return store;
// }

export const mystore = createStore(reducers);



