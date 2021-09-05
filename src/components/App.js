import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  const [isDark, setIsDark] = useState(false);
  const appClass = isDark ? "App dark" : "App light"

  function handleClick() {
    if(isDark) {
      setIsDark(false)
    } else {
      setIsDark(true)
    }
    console.log("clicked")
  }

  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDark ? "Dark" : "Light"} Mode 
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
