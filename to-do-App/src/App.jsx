import Appname from "./Components/Appname";
import Addtodo from "./Components/Addtodo";
import Item1 from "./Components/Item1";
import Todoitems from "./Components/Todoitems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState, useReducer } from "react";
import { TodoItemsContext } from "./Store/todo-items-store";

const TodoItemsReducer = (currentTodoItems,action) => {

  let newtodoItems = currentTodoItems;
  if(action.type === "NEW_ITEM"){
      newtodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  }else if(action.type === "DELETE_ITEM"){
 newtodoItems = currentTodoItems.filter((item) => item.name != action.payload.itemName);
  }
  return newtodoItems;
};

function App() {
  //const [todoitems, SetTodoItems] = useState([]);
  const [todoitems, dispatchTodoItems] = useReducer(TodoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    }

    dispatchTodoItems(newItemAction)
  };

  const DeleteItem = (todoitemname) => {
     const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoitemname
      }
    }

    dispatchTodoItems(deleteItemAction)
    
  };

  const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoitems: todoitems,
          addNewItem: addNewItem,
          DeleteItem: DeleteItem,
        }}
      >
        <center className="todo-container">
          <Appname></Appname>
          <div className="container">
            <Addtodo></Addtodo>
            <WelcomeMessage></WelcomeMessage>
            <Todoitems />
          </div>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
