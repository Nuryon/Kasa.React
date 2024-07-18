import React from "react";
import { Link } from "react-router-dom";
import "../../components/Cards/cards.css";
import logements from "../../data/logements.json";
const Cards = () => {
  return (
    <section className="gallery">
      {logements.map((logements, index) => (
        <Link
          to={"/kasa/logement/" + logements.id}
          key={index}
          style={{ backgroundImage: `url(${logements.cover})` }}
        >
          <h3>{logements.title}</h3>
        </Link>
      ))}
    </section>
  );
};

export default Cards;
