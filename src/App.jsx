import { useContext } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { TaskContext } from "./context/TaskContext";
import "./App.css";

function App() {
  useContext(TaskContext);
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
