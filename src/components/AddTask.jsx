import { useState } from "react";
import Input from "./input.jsx";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

      <Input type="text" placeholder="Título da tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <Input type="text" placeholder="Descrição da tarefa" value={description} onChange={(e) => setDescription(e.target.value)}/>
      
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(
              "Por favor, preencha o título e a descrição da tarefa."
            );
          }

          props.onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
