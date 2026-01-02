import Item from "./Item";
function FoodItems(){

    let FoodItems = ["Dal","Green Vegitable","Roti","Salad","Milk","Ghee"];

return  <ul class="list-group">
    {
      FoodItems.length === 0 ? <h3>i am still hungry</h3> : null
    }
    {FoodItems.map(
      (I) => (<Item key={I} foodItem={I}></Item>)
    )}
</ul>
}

export default FoodItems;