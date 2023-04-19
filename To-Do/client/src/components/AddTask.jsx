import React, { useState, useEffect } from "react";
import Task from "./Tasks";

const AddTask = () => {
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask === "") return;
    const newTaskObj = {
      id: Math.random().toString(36).substring(2, 9),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="ml-80 mr-4 bg-gray-950 mt-4 lg:ml-4 lg:mt-16">
      <div className="p-4">
        <div className="mb-4 bg-gray-700 w-full flex justify-center items-center">
        <i class="ri-edit-circle-line text-2xl p-4"></i>
          <input
            type="text"
            placeholder="Add a task"
            className="px-4 py-4 text-xl border-[0] rounded w-full focus:outline-none bg-gray-700"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
        <div className="">
          <button
            className="py-2 px-4 bg-purple-500 text-white font-bold ml-2 rounded grid items-end"
            onClick={addTask}
          >
            Add
          </button>
          </div>
          </div>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTask;
