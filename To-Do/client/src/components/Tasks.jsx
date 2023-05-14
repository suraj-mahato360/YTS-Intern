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
    // <div className="mt-4">
    //   <li className=" border-t-4 border-purple-500 p-4 flex justify-between items-center">
    //     <div>{new Date(task.createdAt).toLocaleString("en-US")}</div>
    //     <div>
    //       <input
    //         type="checkbox"
    //         className="mr-2 w-5 h-5"
    //         checked={task.completed}
    //         onChange={() => onComplete(task.id)}
    //       />
    //       <span className={`${task.completed ? "line-through" : ""} text-xl`}>
    //         {task.text}
    //       </span>
    //     </div>
    //     <div>
    //       {/* {dueDate && <span className="text-gray-500 mr-2">Due {dueDate}</span>} */}
    //       <button
    //         className="py-1 px-2 bg-red-500 text-white font-bold rounded"
    //         onClick={() => dispatch(deleteTodo(task._id))}
    //       >
    //         Delete
    //       </button>
    //     </div>
    //   </li>
    // </div>
  );
};

export default Tasks;
