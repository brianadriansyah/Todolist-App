import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "../redux/actions/todoAction";
import { MdDeleteForever, MdDoneOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ todo, handleEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.todoName));
  };

  const handleToggleStatus = () => {
    dispatch(toggleTodoStatus(todo.todoName));
  };

  return (
    <li
      className={`bg-stone-300 mb-5 flex justify-between text-stone-700 py-5 rounded-lg text-3xl px-5 ${
        todo.completed ? "completed" : ""
      }`}
    >
      <span className={todo.completed ? "completed" : ""}>{todo.todoName}</span>{" "}
      {!todo.completed && (
        <>
          <span
            onClick={() => handleEdit(todo.todoName)}
            className="text-Neutral-600 cursor-pointer"
          >
            <AiFillEdit />
          </span>
          <span
            onClick={handleDelete}
            className="text-Neutral-600 cursor-pointer mx-2"
          >
            <MdDeleteForever />
          </span>
        </>
      )}
      {!todo.completed && (
        <span
          onClick={handleToggleStatus}
          className="text-Neutral-600 cursor-pointer"
        >
          <MdDoneOutline />
        </span>
      )}
    </li>
  );
};

export default TodoItem;
