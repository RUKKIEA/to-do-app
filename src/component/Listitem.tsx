interface listItemProps{
 storage:  { task: string }[];
}

function Listitem({storage} :listItemProps) {

  return (
    <>
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
