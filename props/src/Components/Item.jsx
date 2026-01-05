import { useState } from "react";
import styles from "./Container.module.css";

function Item({ foodItem }) {
  const [isBought, setIsBought] = useState(false);

  const handleBuyButton = () => {
    setIsBought(true);
  };

  return (
    <li
      className=
      {`list-group-item ${isBought && "list-group-item-success"}`}
    >
      {foodItem}

      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
