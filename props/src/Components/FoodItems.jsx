import Item from "./Item";
function FoodItems({FoodItems}){

return  <ul class="list-group">
    {
      FoodItems.length === 0 ? <h3>i am still hungry</h3> : null
    }
    {FoodItems.map(
      (I) => (<Item key={I} foodItem={I} handleBuyButton={() => console.log(`${I} Bought`)}></Item>)
    )}
</ul>
}

export default FoodItems;