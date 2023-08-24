
import React from "react";
import { Link } from "react-router-dom";
import "./SecondComponent.scss";
import Card from "./Card";

export default () => {
  const card_list = [
    {
      title: "hola como estas",
    },
    {
      title: "hola como estas",
    },
    {
      title: "hola como estas",
    },
    {
      title: "hola como estas",
    },
  ]

  return (

      <div className="container-section">
        <div className="container-content-flex">
          <div className="container-content-info">
              <span> A Blockchain dedicate to </span>
              <h2>Solutions we Crafter to make human lives easier.</h2>
              <p>
                qwefwefwef Solutions we Crafter to make human lives easier Solutions we Crafter to make human lives easier Solutions we Crafter to make human lives easier
              </p>
              <Link to="/">Lean More </Link>
          </div>
          <div className="container-content-cards">
            {card_list.map((e,index) => {
              return {...index > 0 ? <Card  class_hidden="hiddent-card" element={e} /> : <Card  element={e} />} 
            })}
          </div>
        </div>
      </div>
  );
};


