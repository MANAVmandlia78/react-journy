import Appname from "./Components/Appname";
import Addtodo from "./Components/Addtodo";
import Item1 from "./Components/Item1";
import Todoitems from "./Components/Todoitems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import {TodoItemsContext} from "./Store/todo-items-store"
function App() {

  const [todoitems, SetTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoitems,
      { name: itemName, dueDate: itemDueDate },
    ];
    SetTodoItems(newTodoItems);
  };

  const DeleteItem = (todoitemname) => {
  const newTodoItems = todoitems.filter(item => item.name != todoitemname)
  SetTodoItems(newTodoItems);
  };

  const defaultTodoItems = [{name: 'Buy Ghee', dueDate: 'Today'}]

  return (
    <>
    <TodoItemsContext.Provider value={{todoitems : todoitems,addNewItem : addNewItem , DeleteItem : DeleteItem}}>
      <center className="todo-container">
        <Appname></Appname>
        <div className="container">
          <Addtodo></Addtodo>
          <WelcomeMessage></WelcomeMessage>
          <Todoitems/>
        </div>
      </center>
    </TodoItemsContext.Provider>
    </>
  );
}

export default App;
