import { useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";
import { useContext } from "react";

function Addtodo(){
   const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  addNewItem(todoName,dueDate);
  };

    return <form className="row kg-row" onSubmit={handleAddButtonClicked}>
            <div className="col-6">
              <input type="text" ref={todoNameElement}  placeholder="Enter Todo Here" />
            </div>
            <div className="col-4">
              <input type="date" ref={dueDateElement} />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success">
                <MdAddToPhotos/>
              </button>
            </div>
          </form>
}

export default Addtodo;