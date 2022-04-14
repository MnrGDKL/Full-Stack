import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
  counter : 3,
  list : [
    {id: 1, text: 'Todo 1', completed : false},
    {id: 2, text: 'Todo 2', completed : false},
    {id: 3, text: 'Todo 3', completed : false},
  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        counter : state.counter + 1,
        list : [
          ...state.list,
          {
            id: state.counter + 1,
            text: action.payload,
            completed : false
          }
        ]
      }
    case DELETE_TODO:
      return {
        ...state,
        list : state.list.filter(todo => todo.id !== action.payload)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        list : state.list.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed : !todo.completed
            }
          }
          return todo;
        })
      }
    case CLEAR_TODO_LIST:
      return {
        ...state,
        list : []
      }
    default:
      return state;
  }
}
export default todoReducer;
