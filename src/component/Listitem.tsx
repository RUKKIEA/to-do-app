import { useState } from "react";

interface listItemProps{
 storage:  { task: string, completed?: boolean }[];
 deleteItem: (index: number) => void;
 editItem: (index: number, newTask: string) => void;
 toggleCompleted: (index: number) => void;
}

function Listitem({storage, deleteItem, editItem, toggleCompleted} :listItemProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null); //used to know which item is being edited
  const [editTask, setEditTask] = useState<string>(''); // used to know which task is being edited

  const handleEdit = (index: number, task: string) => {
    setEditIndex(index);
    setEditTask(task);
  };

  const handleSave = (index: number) => {
    editItem(index, editTask);
    setEditIndex(null); // used to exit edit mode
    setEditTask('');  //used to reset edit mode 
  }

  return (
    <>
      <div>
        {storage.map((storage, index) => (
          <div className="container" key={index}>
            <ul>
            <li style={{ textDecoration: storage.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={storage.completed}
                onChange={() => toggleCompleted(index)}
              />
                {/* activating input field in edit mode */}
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
