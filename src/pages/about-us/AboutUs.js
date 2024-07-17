import React from "react";
import Colapse from "../../components/colapse/Colapse";
import aboutUsList from "./aboutUsList.json";
import "./about.css"
const AboutUs = () => {
  return (
    <div className="about-colapse">
      {aboutUsList.map((about) => (
        <Colapse title={about.title} text={about.text} />
      ))}
    </div>
  );
};

export default AboutUs;
