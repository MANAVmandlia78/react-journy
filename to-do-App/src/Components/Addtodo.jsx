import { useState } from "react";

function Addtodo({onNewItem}){

  const [todoName,SetTodoName] = useState("");
  const [dueDate,SetDueDate] = useState("");

  const handleNameChange = (e) => {
   SetTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
   SetDueDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
  onNewItem(todoName,dueDate);
  SetTodoName("");
  SetDueDate("");
  };

    return <div class="row kg-row">
            <div class="col-6">
              <input type="text" value={todoName} placeholder="Enter Todo Here" onChange={handleNameChange}/>
            </div>
            <div class="col-4">
              <input type="date" value={dueDate} onChange={handleDateChange}/>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success" onClick={
                () => handleAddButtonClicked()
              }>
                Add
              </button>
            </div>
          </div>
}

export default Addtodo;