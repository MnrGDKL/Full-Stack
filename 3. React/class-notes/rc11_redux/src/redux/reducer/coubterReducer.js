import { DECREASE_COUNTER, INCREASE_COUNTER, RESET } from "../types/counterTypes";

const INITIAL_STATE = {
  counter: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {...state, counter: state.counter + 1}
    case DECREASE_COUNTER:
      return {...state, counter: state.counter - 1}
    case RESET:
      return {...state, counter: 0};
  default:
    return state;
  }
};
export default counterReducer;
