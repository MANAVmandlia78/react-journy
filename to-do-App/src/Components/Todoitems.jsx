import Item1 from "./Item1";
function Todoitems({todoitems}){
return <>
        <div className="items-container">
            {todoitems.map(
                (I) => (<Item1 todoName= {I.name} date={I.dueDate} />)
            )}
          </div>
</>
}

export default Todoitems;