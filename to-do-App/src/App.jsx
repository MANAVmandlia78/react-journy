import Appname from "./Components/Appname";
import Addtodo from "./Components/Addtodo";
import Item1 from "./Components/Item1";
import Todoitems from "./Components/Todoitems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoitems, SetTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoitems,
      { name: itemName, dueDate: itemDueDate },
    ];
    SetTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoitemname) => {
  const newTodoItems = todoitems.filter(item => item.name != todoitemname)
  SetTodoItems(newTodoItems);
  }

  return (
    <>
      <center className="todo-container">
        <Appname></Appname>
        <div className="container">
          <Addtodo onNewItem={handleNewItem}></Addtodo>
          {todoitems.length === 0 ? <WelcomeMessage></WelcomeMessage> : null}
          <Todoitems todoitems={todoitems} ondeleteclick={handleDeleteItem}/>
        </div>
      </center>
    </>
  );
}

export default App;
