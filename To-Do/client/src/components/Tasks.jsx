import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";

const Tasks = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo mt-4 ml-72 border-t-4 border-purple-500 p-4 lg:ml-4">
      <div className="flex justify-between items-center">
        <div>
          <span className={`${todo.completed ? "line-through" : ""} text-2xl`}>
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => dispatch(deleteTodo(todo._id))}
          className="close py-1 px-2 bg-red-500 text-white font-bold rounded"
        >
          Delete
        </button>
      </div>
      <div>{new Date(todo.createdAt).toLocaleString("en-US")}</div>
    </div>
  );
};

export default Tasks;
