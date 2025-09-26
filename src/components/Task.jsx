import React, { useState } from 'react'
import { AddTask } from './AddTask'
import { ListTask } from './ListTask'

export const Task = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const appendTask = (task) => {
    setTasks([...tasks, task]);
  };

  const storePerm = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div>
      <h1>TASK MANAGER COMPONENT</h1>
      <AddTask appendTask={appendTask}></AddTask>
      <button onClick={storePerm} className='btn btn-primary'>Save to LocalStorage</button>
      <ListTask tasks={tasks}></ListTask>
    </div>
  );
};