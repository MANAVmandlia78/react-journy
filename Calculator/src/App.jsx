import style from "./App.module.css"
import Display from "./Components/Display"
import ButtonsContainer from "./Components/ButtonsContainer"
function App() {

  return (
    <>
      <div className={style.calculator}>
        <Display/>
        <ButtonsContainer/>
      </div>
    </>
  )
}

export default App
