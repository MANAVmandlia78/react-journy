import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems';
import Container from './Components/Container'
function App() {
 

  return (<>
    <Container>
    <h1>Healthy Food</h1>
    <FoodItems/>
    </Container>
    <Container>
    <p>Above is the list od healthy Food Items Available Enjoy the food</p>
    </Container>
    </>
  )
}

export default App
