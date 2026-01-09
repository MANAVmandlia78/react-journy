import { useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";

function Addtodo({onNewItem}){
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  onNewItem(todoName,dueDate);
  };

    return <form class="row kg-row" onSubmit={handleAddButtonClicked}>
            <div class="col-6">
              <input type="text" ref={todoNameElement}  placeholder="Enter Todo Here" />
            </div>
            <div class="col-4">
              <input type="date" ref={dueDateElement} />
            </div>
            <div class="col-2">
              <button type="submit" class="btn btn-success">
                <MdAddToPhotos/>
              </button>
            </div>
          </form>
}

export default Addtodo;