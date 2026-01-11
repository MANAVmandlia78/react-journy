import { TodoItemsContext } from "../Store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
    const contextobj = useContext(TodoItemsContext);
    const todoitems = contextobj.todoitems;
return todoitems.length === 0 && <p>Enjoy Your Day</p>
}

export default WelcomeMessage;