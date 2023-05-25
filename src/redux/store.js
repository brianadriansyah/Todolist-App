import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const initialState = [];

const storedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
const store = createStore(todoReducer, storedTodoList);

export default store;
