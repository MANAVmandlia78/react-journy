import Appname from './Components/Appname'
import Addtodo from './Components/Addtodo'
import Item1 from './Components/Item1';
import Item2 from './Components/Item2';
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
       <Appname></Appname>
        <div className="container">
          <Addtodo></Addtodo>
          <div className="items-container">
           <Item1/>
           <Item2/>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
