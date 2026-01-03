import Appname from "./Components/Appname";
import Addtodo from "./Components/Addtodo";
import Item1 from "./Components/Item1";
import Todoitems from "./Components/Todoitems";
import "./App.css";

function App() {
  const todoitems = [
    {
      name: "BuyMilk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go To Collage",
      dueDate: "5/10/2023",
    },
    {
      name: "Talk to GF",
      dueDate: "6/10/2023",
    },
    {
      name: "Shopping",
      dueDate: "7/10/2023",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <Appname></Appname>
        <div className="container">
          <Addtodo></Addtodo>
          <Todoitems todoitems={todoitems}/>
        </div>
      </center>
    </>
  );
}

export default App;
