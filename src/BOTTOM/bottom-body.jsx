import React from "react";
import "./bottom-body.css";


function Bottom ({items}){
  return (
    <div className="body-parent-bottom">
      <h1 className="first-title-bottom">LISTA DE COMPRAS</h1>

      <div className="parent-content">
        <div className="content">
          <img className="img" src="./images/4.png" alt="urgent" />
          <h1>URGENTE</h1>
          <ul>
            {items.urgente.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="content">
          <img className="img" src="./images/6.png" alt="food" />
          <h1>ALIMENTOS</h1>
          <ul>
            {items.alimentos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="content">
          <img className="img" src="./images/5.png" alt="general" />
          <h1>PRODUTOS GERAIS</h1>
          <ul>
            {items.produtos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

   /* return(
    <div className="body-parent-bottom">
        <h1 className="first-title-bottom"> LISTA DE COMPRAS</h1>

<div className="parent-content">   

        <div className=" content "> 
        <img className="img" src="./images/4.png" alt="urgent" />
          <h1> URGENTE</h1>
        </div>

        <div className=" content">
        <img className="img" src="./images/6.png" alt=" food" />
          <h1> ALIMENTOS</h1>
                
        </div>
        <div className=" content " >
        <img className="img"src="./images/5.png" alt="general" />
          <h1> PRODUTOS GERAIS</h1>
                 
        </div>
</div>
    </div>
    
   ); */
}

export default Bottom;
