import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(taskTittle, taskDescripcion) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: taskTittle,
        description: taskDescripcion,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    console.log(tasks);
    console.log(taskId);
    tasks.filter((task) => task.id !== taskId);
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  
  return (
    <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>{props.children}</TaskContext.Provider>
  );
}
