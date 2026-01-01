import Random from "./Random";
function Hello(){

    let myName = "Manav";
    let num = 123;
    let fullname = () =>{
        return "Manav Mandalia"
    }

    return <div>
        <h3>at room {num} you will find {fullname()}</h3>
    </div>
    
}

export default Hello;