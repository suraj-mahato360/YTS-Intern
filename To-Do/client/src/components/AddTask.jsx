import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todoSlice";
// import Task from "./Tasks";

const AddTask = () => {
  
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      toast.error("Please enter a text");
    }
    setText("");

    dispatch(createTodo({ text }));
  };
  // const addTask = (e) => {
  //   e.preventDefault();
  //   if (text === "") {
  //     toast.error("Please enter a text");
  //   }
  //   setText("");

  //   dispatch(createTodo({ text }));
  // };

  // const completeTask = (id) => {
  //   const updatedTasks = text.map((todo) =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   setText(updatedTasks);
  // };

  return (
    <section className="form ml-72 mr-4 bg-gray-950 mt-24 lg:ml-4 lg:mt-24">
      <form onSubmit={onSubmit} className="p-4">
        <div className="form-group mb-4 bg-gray-700 w-full flex justify-center items-center">
          <input
            type="text"
            id="text"
            name="text"
            className="px-4 py-4 text-xl border-[0] rounded w-full focus:outline-none bg-gray-700"
            placeholder="Add a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group flex justify-end">
          <button className="btn btn-block py-2 px-4 bg-purple-500 text-white font-bold ml-2 rounded grid items-end" type="submit">
            Add
          </button>
        </div>
      </form>
    </section>
    // <div className="ml-72 mr-4 bg-gray-950 mt-24 lg:ml-4 lg:mt-24">
    //   <div className="p-4">
    //     <div className="mb-4 bg-gray-700 w-full flex justify-center items-center">
    //     <i class="ri-edit-circle-line text-2xl p-4"></i>
    //       <input
    //         type="text"
    //         placeholder="Add a task"
    //         className="px-4 py-4 text-xl border-[0] rounded w-full focus:outline-none bg-gray-700"
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //     </div>
    //     <div className="flex justify-end">
    //     <div className="">
    //       <button
    //         className="py-2 px-4 bg-purple-500 text-white font-bold ml-2 rounded grid items-end"
    //         onClick={addTask}
    //       >
    //         Add
    //       </button>
    //       </div>
    //       </div>
    //     {/* <ul>
    //         <Task
    //           onComplete={completeTask}
    //         />
    //     </ul> */}
    //   </div>
    // </div>
  );
};

export default AddTask;
