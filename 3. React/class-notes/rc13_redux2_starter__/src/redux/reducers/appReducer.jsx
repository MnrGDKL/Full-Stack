import { SET_LOADING, CLEAR_LOADING } from "../types/appTypes"

const initialState = {
  loading : false
};

 const appReducer = (state = initialState, { type }) => {
  switch (type) {

  case SET_LOADING:
    return { ...state, loading: true }

  case CLEAR_LOADING:
    return { ...state, loading: false }

  default:
    return state
  }
}
export default appReducer;
