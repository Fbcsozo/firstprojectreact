import React from "react";
import "./top-body.css";
import { FiSearch } from "react-icons/fi";


function Body() {
    return (
        <div className="body-father" > 

        <div className="left-body"> 

        <h1 className="first-title" > Nosso <br/> Mercado</h1>
        {/* <span className="span">Lista de Compras</span> */}
        <br/>

      {/*   <input 
        className="controle-semanal"
        type="text" 
        placeholder="Controle Semanal" > 
        </input> */}
        </div>

        <div className="right-body">
            <img className ="img-first "src="./images/image-market.png" alt="shopping-market" />
        </div>
        </div>
    )
  }
  export default Body;