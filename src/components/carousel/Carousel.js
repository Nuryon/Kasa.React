import React, { useState } from "react";
import arrowLeft from "../../assets/icons/arrowleft.svg";
import arrowRight from "../../assets/icons/arrowright.svg";
import "./carousel.css";
const Carousel = (props) => {
  const { pictures } = props;
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const slideLength = pictures.length;
  const increment = () => {
    let newIndex = index + 1;
    if (newIndex > pictures.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
    setCounter(counter + 1 === slideLength ? 0 : counter + 1);
  };
  const decrement = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }
    setIndex(newIndex);
    setCounter(counter - 1 < 0 ? slideLength - 1 : counter - 1);
  };
  return (
    <div className="carousel-container">
      <img src={pictures[index]} className="carousel-img" alt=""/>
      <img
        onClick={decrement}
        className="arrow arrow-left"
        src={arrowLeft}
        alt="arrow left"
      />
      <p className="counter">
        {counter + 1}/{slideLength}
      </p>
      <img
        onClick={increment}
        className="arrow arrow-right"
        src={arrowRight}
        alt="arrow right"
      />
    </div>
  );
};

export default Carousel;
