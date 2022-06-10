import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const[isBtnDark, setBtnState] = useState(false)

  function handleIsDarkOnClick(){
    console.log("I am cliked already")
    setBtnState((isBtnDark) => !isBtnDark)
  }

  const appClass = isBtnDark ? "App dark" : "App light"

  return (
    <div className={appClass} >
     <header>
        <h2>Shopster</h2>
        
        <button onClick={handleIsDarkOnClick}>
          {isBtnDark ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
