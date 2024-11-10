interface listItemProps{
 storage:  { task: string }[];
 deleteItem: (index: number) => void;
}

function Listitem({storage, deleteItem} :listItemProps) {

  return (
    <>
      <div>
        {storage.map((storage, index) => (
          <div className="container">
            <ul>
              <li key={storage.task}>{storage.task}</li>
            </ul>
            <div>
              <button>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listitem;
