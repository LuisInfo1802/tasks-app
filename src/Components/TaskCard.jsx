import { useContext } from "react";
import React from "react";
import { tasks } from "../data/task";
import {TaskContext} from '../context/TaskContext'
export default function TaskCard({task}) {
  const {deleteTask}=useContext(TaskContext); 
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize marker:">{task.id}</h2>
      <h1 className="text-xl font-bold capitalize marker:  ">{task.title}</h1>
      <h3 className="text-gray-500 text-sm">{task.description}</h3>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}
