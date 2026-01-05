import style from "./App.module.css"
import Display from "./Components/Display"
import ButtonsContainer from "./Components/ButtonsContainer"
import { useState } from "react"
function App() {

  let [CalVal , SetCalVal] = useState("");
  const onButtonClick = (buttontext) => {
   if(buttontext === "C"){
    SetCalVal("")
   }else if(buttontext === "="){
    const result = eval(CalVal);
    SetCalVal(result)
   }else{
    const newdisplayvalue= CalVal + buttontext;
    SetCalVal(newdisplayvalue)
   }
  }

  return (
    <>
      <div className={style.calculator}>
        <Display displayValue={CalVal}/>
        <ButtonsContainer onButtonClick={
         onButtonClick
        }/>
      </div>
    </>
  )
}

export default App
