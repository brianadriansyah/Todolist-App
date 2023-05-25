import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_TODO_LIST,
  TOGGLE_TODO_STATUS,
} from "../actions/todoAction";

// const initialState = []
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { todoName: action.payload };
      localStorage.setItem("todoList", JSON.stringify([...state, newTodo]));
      return [...state, newTodo];
    case DELETE_TODO:
      const updatedTodoList = state.filter(
        (val) => val.todoName !== action.payload
      );
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
      return updatedTodoList;
    case EDIT_TODO:
      const editedTodoList = state.map((val) => {
        if (val.todoName === action.payload.recentTodoName) {
          val.todoName = action.payload.newTodoName;
        }
        return val;
      });
      localStorage.setItem("todoList", JSON.stringify(editedTodoList));
      return editedTodoList;
    case SET_TODO_LIST:
      return action.payload;
    case TOGGLE_TODO_STATUS:
      return state.map((val) => {
        if (val.todoName === action.payload) {
          return {
            ...val,
            completed: !val.completed,
          };
        }
        return val;
      });
    default:
      return state;
  }
};

export default todoReducer;
