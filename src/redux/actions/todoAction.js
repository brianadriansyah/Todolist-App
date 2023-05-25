export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_TODO_LIST = "SET_TODO_LIST";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";

// Action Creators
export const addTodo = (todoName) => ({
  type: ADD_TODO,
  payload: todoName,
});

export const deleteTodo = (todoName) => ({
  type: DELETE_TODO,
  payload: todoName,
});

export const editTodo = (recentTodoName, newTodoName) => ({
  type: EDIT_TODO,
  payload: {
    recentTodoName,
    newTodoName,
  },
});

export const setTodoList = (todoList) => ({
  type: SET_TODO_LIST,
  payload: todoList,
});

export const toggleTodoStatus = (todoName) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: todoName,
  };
};
