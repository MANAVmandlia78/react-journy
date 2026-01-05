import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import FoodInput from "./Components/FoodInput";
import Container from "./Components/Container";
import { useState } from "react";
function App() {
  let [texttoshow, SetTextState] = useState();
  let [foodItems, SetFoodItems] = useState([
    "Dal",
    "Green vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ]);

  const onKeyDown = (e) => {
    if(e.key === "Enter"){
      let newFoodItem = e.target.value;
      let newItems = [...foodItems,newFoodItem];
      SetFoodItems(newItems)
    }
    console.log(e.target.value);
    SetTextState(e.target.value);
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems FoodItems={foodItems} />
      </Container>
      <Container>
        <p>Above is the list od healthy Food Items Available Enjoy the food</p>
      </Container>
    </>
  );
}

export default App;
