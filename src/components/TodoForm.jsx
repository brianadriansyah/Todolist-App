import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/actions/todoAction";

const TodoForm = ({ editMode, editValue, setEditMode, setEditValue }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode && editValue) {
      setTodo(editValue);
    } else {
      setTodo("");
    }
  }, [editMode, editValue]);

  const handleForm = (e) => {
    e.preventDefault();
    if (editMode && editValue) {
      dispatch(editTodo(editValue, todo));
      setEditMode(false);
      setEditValue("");
      setTodo("");
    } else {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleForm}>
      <input
        className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-purple-700 text-white py-3 px-8 rounded-lg mb-8"
      >
        {editMode && editValue ? "Save Edit" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
