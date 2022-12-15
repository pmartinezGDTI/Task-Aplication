import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const {createTask} = useContext(TaskContext)
  
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Para prevenir que la pagina se recargue al enviar un formulario
    createTask(title, descripcion);
    setTitle('')
    setDescripcion('')
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-white text-2xl font-bold mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus={true}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <br />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white"> Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
