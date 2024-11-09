import { FormEvent, useState } from "react";

interface formProps {
  setStorage: Function;
}

const Form = ({ setStorage }: formProps) => {
  const [task, setTask] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setStorage(task);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          id="item"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add item</button>
      </form>
    </div>
  );
};

export default Form;
