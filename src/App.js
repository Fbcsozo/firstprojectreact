import React, { useState } from "react";
import Body from "./TOP/top-body";
import Middle from "./MIDLE/middle-body";
import Bottom from "./BOTTOM/bottom-body";

function App() {
  const [items, setItems] = useState({
    urgente: [],
    alimentos: [],
    produtos: []
  });

  const addNewItem = (newItem) => {
    const category = newItem.category;
    setItems((prevItems) => ({
      ...prevItems,
      [category]: [...prevItems[category], newItem.description]
    }));
  };

  return (
    <div className="container">
      <Body />
      <Middle onAddItem={addNewItem} />
      <Bottom items={items} />
    </div>
  );
}


  /* const addNewItem = (newItem) => {
    const category = newItem.category;
    setItems((prevItems) => {
      // Verifica se a categoria já existe em prevItems
      if (prevItems[category]) {
        return {
          ...prevItems,
          [category]: [...prevItems[category], newItem.description]
        };
      } else {
        // Se a categoria ainda não existe, inicializa-a como um array vazio
        return {
          ...prevItems,
          [category]: [newItem.description]
        };
      }
    });
  };

  return (
    <div className="container">
    <Body />
    <Middle onAddItem={addNewItem}/>
    <Bottom items = {items}/>
    </div>
  )

}  */

export default App;
