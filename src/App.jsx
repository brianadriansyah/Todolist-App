import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "./redux/actions/todoAction";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoItem from "./components/TodoItem";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    dispatch(setTodoList(storedTodoList));
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleEdit = (editValue) => {
    setEditMode(true);
    setEditValue(editValue);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodoList = useMemo(() => {
    if (filter === "active") {
      return todoList.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todoList.filter((todo) => todo.completed);
    } else {
      return todoList;
    }
  }, [todoList, filter]);

  return (
    <div className="bg-slate-100 w-full h-max flex items-center font-poppins">
      <div className="w-[800px] mx-auto rounded shadow-lg text-center bg-white p-5">
        <h1 className="text-4xl font-bold mb-10">What's the plan for today?</h1>
        <TodoForm
          editMode={editMode}
          editValue={editValue}
          setEditMode={setEditMode}
          setEditValue={setEditValue}
        />
        <TodoFilter filter={filter} handleFilterChange={handleFilterChange} />
        <div className="todo-show-area">
          <ul>
            {filteredTodoList.map((singleTodo, index) => (
              <TodoItem key={index} todo={singleTodo} handleEdit={handleEdit} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
