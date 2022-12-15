import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  // Si se le pasa la funcion directamente al onclick, esta se ejecutara, si se quiere que se ejecute solo cuando el usuario de click, se debe de poner sin los parentesis o si se le quieren pasar valores, se debe de meter dentro de otra donde ya se le pasen los valores
  // Con use context me traje el valor de la variable 20 del contexto que engloba a todos los componentes para su uso en este componente
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>

      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
