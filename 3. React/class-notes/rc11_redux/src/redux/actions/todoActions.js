import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload : text
  };
}
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload : payload
  }
}
export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST
  }
}
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

