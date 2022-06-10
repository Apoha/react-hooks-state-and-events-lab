import React, {useState} from "react";

function Item({ name, category }) {

  
  const [itemIsAdded, setAddedItem] = useState(false)


  function handleAddedItemInCart(){
    setAddedItem((itemIsAdded)=> !itemIsAdded)
  }


  return (
    <li className={itemIsAdded ? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick= {handleAddedItemInCart}>
        {itemIsAdded? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
