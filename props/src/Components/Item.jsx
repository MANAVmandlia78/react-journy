import styles from './Container.module.css'


function Item({foodItem , handleBuyButton}) {



  return  <li class="list-group-item">{foodItem}
  <button 
  className={`${styles.button} btn btn-info`}
  onClick={
    handleBuyButton
  }
  >Buy</button>
  </li>
}

export default Item;
