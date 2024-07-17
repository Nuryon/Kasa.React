import React from "react";
import "../../components/banner/banner.css";
const Banner = ({ title, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
