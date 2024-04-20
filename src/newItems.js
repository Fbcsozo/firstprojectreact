/* export default function newItems () {
    

    <ul>
    <li>pão</li>
    </ul>
  
}
 */

import React from "react";

function NewItem({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default NewItem;