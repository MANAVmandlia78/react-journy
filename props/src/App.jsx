import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems';
import FoodInput from './Components/FoodInput';
import Container from './Components/Container'
function App() {

  let texttoshow = "Food Item Enterd By User"

  const handleOnChange = (e) => {
        console.log(e.target.value)
        texttoshow = e.target.value
    }
 

  return (<>
    <Container>
    <h1>Healthy Food</h1>
    <FoodInput handleOnChange={handleOnChange}/>
    <p>{texttoshow}</p>
    <FoodItems/>
    </Container>
    <Container>
    <p>Above is the list od healthy Food Items Available Enjoy the food</p>
    </Container>
    </>
  )
}

export default App
