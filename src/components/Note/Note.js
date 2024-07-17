import React from "react";

import emptyStars from "../../assets/icons/emptystar.svg";
import { useParams } from "react-router-dom";
import fullStars from "../../assets/icons/fullstar.svg";
import  logements from "./logement.json"
import "../../pages/logement/logement.css"
const Note = () => {
    const { id } = useParams();
    const data = logements.find((item) => item.id === id);
  
    const numberStars = parseInt(data.rating);
  
    const renderStars = () => {
      let activeStars = [];
  
      for (let i = 0; i <= 4; i++) {
        if (numberStars > i) {
          activeStars.push(true);
        } else {
          activeStars.push(false);
        }
      }
      return activeStars.map((image, i) => {
       
        if (image) {
          return (
            <img
              src={fullStars}
              alt="note sur 5"
              key={i}
              className="star"
            />
          );
        } else {
          return (
            <img
              src={emptyStars}
              alt="pas de note"
              key={i}
              className="star"
            />
          );
        }
      });
    };
    return (
      <div className="logements-stars">
        <div className="star-container">{renderStars()}</div>
      </div>
    );
  };
export default Note;