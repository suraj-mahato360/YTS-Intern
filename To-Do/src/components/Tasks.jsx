import React from 'react'
import { formatDistanceToNowStrict } from "date-fns";
import { enUS } from "date-fns/locale";

const Tasks = ({ task, onComplete, onDelete }) => {
    const dueDate = task.dueDate
    ? formatDistanceToNowStrict(new Date(task.dueDate), {
        locale: enUS,
        addSuffix: true
      })
    : "";

  return (
    <div className='mt-4'>
        <li className=" border-t-4 border-purple-500 p-4 flex justify-between items-center">
      <div>
        <input
          type="checkbox"
          className="mr-2 w-5 h-5"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />
        <span className={`${task.completed ? "line-through" : ""} text-xl`}>
          {task.text}
        </span>
      </div>
      <div>
        {dueDate && <span className="text-gray-500 mr-2">Due {dueDate}</span>}
        <button
          className="py-1 px-2 bg-red-500 text-white font-bold rounded mr-2"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
    </div>
  )
}

export default Tasks