import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  const appClass = isInCart ? "in-cart" : ""

  const handleClick = () => {
    if(isInCart) {
      setIsInCart(false)
    } else {
      setIsInCart(true)
    }
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick = {handleClick} 
      className= {isInCart ? "remove" : "add"}
      >
      {isInCart ? "Remove From" : "Add To"} Cart
      </button>
    </li>
  );
}

export default Item;
