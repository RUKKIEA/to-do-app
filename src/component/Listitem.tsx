import { FormEvent, useState } from "react";

function Listitem() {
  const [task, setTask] = useState("");
  const [storage, setStorage] = useState<{ task: string }[]>([]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setStorage([...storage, { task: task }]);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          id="item"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleClick}>Add item</button>
      </form>
      <div>
        {storage.map((storage) => (
          <div className="container">
            <ul>
              <li key={storage.task}>{storage.task}</li>
            </ul>
            <div>
              <button>edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listitem;
