import React from "react";
import Colapse from "../../components/colapse/Colapse";
import "./about.css";
import aboutUsList from "./aboutUsList.json";
const AboutUs = () => {
  return (
    <div className="about-colapse">
      {aboutUsList.map((about) => (
        <div className="about-colapse-content" key={about.title}>
          <Colapse title={about.title} text={about.text} />{" "}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
