import React, { useState } from "react";
import "./colapse.css";

function Colapse(props) {
  const { title, text, isList, list } = props;
 
  const [activeText, setActiveText] = useState(false);
 
  const [isOpen, setIsOpen] = useState(false);

  const onShowText = () => {
    setActiveText(!activeText);
  };
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  /**onShowText 
   * 
   */
  return (
    <div className="colapse">
       <h2  onClick={toggleCollapse}>
        <span>{title}</span>
        <img
         className={`arrow-colapse ${isOpen ? "isArrowOpen" : ""}`}
          src={require("./arrow.png")} 
          alt="Toggle Arrow"
          onClick={onShowText}
        />
      </h2>
      <div className={isOpen ? "active-colapse-text" : "colapse-text"}>
        {isList ? (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{text}</p>
        )}
      </div>
   
   
      
    </div>
     /***<div>
      {Array.isArray(liste2.equipements) && (
          <ul>
            {liste2.equipements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )} 
      </div> ***/

  );
}

export default Colapse;

