import Listitem from "./component/Listitem";
import Form from "./component/Form";
import { useState } from "react";

function App() {
  const [storage, setStorage] = useState<{ task: string }[]>([]);

  const getToDo = (task: string) => {
    setStorage([...storage, { task }]);
  };

  const deleteItem = (index: number) => {
    setStorage(storage.filter((_, i) => i !== index)); // Remove item by index
  };

  const editItem = (index: number, newTask: string) => {
    const updatedStorage = [...storage];
    updatedStorage[index].task = newTask;
    setStorage(updatedStorage);
  };

  return (
    <>
      <Form setStorage={getToDo} />
      <Listitem storage={storage} deleteItem={deleteItem} editItem={editItem} />
    </>
  );
}

export default App;
