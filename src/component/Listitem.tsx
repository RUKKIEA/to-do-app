import { useState } from "react";

interface listItemProps{
 storage:  { task: string }[];
 deleteItem: (index: number) => void;
 editItem: (index: number, newTask: string) => void
}

function Listitem({storage, deleteItem, editItem} :listItemProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTask, setEditTask] = useState<string>('');

  const handleEdit = (index: number, task: string) => {
    setEditIndex(index);
    setEditTask(task);
  };

  const handleSave = (index: number) => {
    editItem(index, editTask);
    setEditIndex(null);
    setEditTask('')
  }

  return (
    <>
      <div>
        {storage.map((storage, index) => (
          <div className="container" key={index}>
            <ul>
              <li>
                {editIndex === index ? (<input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)}/>) : (storage.task)}
              </li>
            </ul>

            <div>
              {editIndex === index ? (<button onClick={() => handleSave(index)}>Save</button>) : (<button onClick={() => handleEdit(index, storage.task)}>Edit</button>)}
              
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listitem;
