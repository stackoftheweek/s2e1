"use client"

import { useState } from "react";
import NewTask from "./NewTask";
import { ITask } from "./Task";
import TaskList from "./TaskList";



const TaskDisplay = () => {
  const [ tasks, setTasks ] = useState<ITask[]>([
    {
      id: 1,
      title: 'Task 1',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Task 3',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Task 4',
      isCompleted: false,
    },
  ]);

  const addTask = (title: string) => {
    setTasks([...tasks, {
      id: tasks.sort((a,b) => b.id - a.id)[0].id + 1,
      title,
      isCompleted: false,
    }]);
  }

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1>Tasks</h1>
        <NewTask onSubmit={addTask}/>
      </div>
      
      <TaskList tasks={tasks} />
    </div>
  )
}

export default TaskDisplay;