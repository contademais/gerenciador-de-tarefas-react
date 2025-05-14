import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  if (props.tasks.length === 0) {
    return (
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        <h2 className="text-2xl text-slate-600 font-bold">
          Nenhuma tarefa encontrada
        </h2>
      </div>
    );
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={
              "bg-slate-400 text-white p-2 rounded-md w-full text-left cursor-pointer" +
              (task.isCompleted ? " line-through" : "")
            }
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onDeleteTask(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
