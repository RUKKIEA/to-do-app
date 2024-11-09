import Listitem from "./component/Listitem";
import Form from "./component/Form"
import { useState } from "react";



function App() {
  const [storage, setStorage] = useState<{ task: string }[]>([]);
  const getToDo = (task : string) => {
    setStorage([...storage, {task}])
  }
  return (
    <>
      <Form  setStorage={getToDo}/>
      <Listitem storage={storage}/>
    </>
  );
}

export default App;
