import Item1 from "./Item1";
import { TodoItemsContext } from "../Store/todo-items-store";
import { useContext } from "react";

function Todoitems() {

    const {todoitems,DeleteItem} = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {todoitems.map((I) => (
          <Item1
            todoName={I.name}
            date={I.dueDate}
            ondeleteclick={DeleteItem}
          />
        ))}
      </div>
    </>
  );
}

export default Todoitems;
