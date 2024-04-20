import React, { useState } from "react";
import "./middle-body.css";
import { FaLocationArrow } from "react-icons/fa6";


function Middle({onAddItem}) {

    const [description, setDescription] = useState("");
    const [selectCategory, setSelectCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            description: description,
            category: selectCategory
        };
        onAddItem(newItem);;
        setDescription("");
        console.log ();
    }

    return (
        <div className="body-parent">
          <div>
            <h1 className="title ">Cadastre aqui</h1>
            <span className="span">Os itens da sua lista</span>
            <br />
            <div className="input-icon">
              <input 
                className="input-element"
                type="text"
                placeholder="Type your Item"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="icon-first"><FaLocationArrow /></button> <br />
            </div>
    
            <select
              className="selection"
              value={selectCategory}
              onChange={(e) => setSelectCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="urgente">Urgente</option>
              <option value="alimentos">Alimentos</option>
              <option value="produtos">Produtos Gerais</option>
            </select>
            <button onChange={handleSubmit}>OK</button>
            <img className="cest-img" src="./images/3.png" alt="cesta" />
          </div>
        </div>
      );
    }
   /*  return(
        <div className="body-parent"> 
        
        <div>
           <h1 className="title ">  Cadastre aqui</h1>
           <span className="span"> Os itens da sua lista</span><br/>

              <div className="input-icon">
                <input className="input-element" 
                 type="text" 
                 placeholder="Type your Item" 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)} />
                 
                 <button className="icon-first"><FaLocationArrow /></button> <br/>
               </div>

           <select className="selection"
                    value = {selectCategory}
                    onChange = {(e) => setSelectCategory (e.target.value)}>
                       
                <option value="urgente">Urgente</option>
                <option value="alimentos">Alimentos</option>
                <option value="produtos-gerais">Produtos Gerais</option>
                </select>
                <button onClick={handleSubmit}>OK</button>
          
           <img className="cest-img" src="./images/3.png" alt="cesta" />
        </div>
            
            </div>
    )
    
} */
export default Middle;  