import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Colapse from "../../components/colapse/Colapse";
import logements from "../../data/logements.json";

import "./logement.css";
import Note from "../../components/Note/Note";

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeLogement, setActiveLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const index = logements.findIndex((logement) => logement.id === id);
    if (index < 0) {
      navigate("/error-404");
    } else {
      setActiveLogement(logements[index]);
      setLoading(false);
    }
  }, [id, navigate]);

  return loading ? (
    <div>Chargement...</div>
  ) : (
    <div className="main-container">
      <Carousel pictures={activeLogement.pictures} />
      <div className="infos-container">
        <div className="logements-header-tags">
          <div className="logements-header">
            <h1 className="logements-title">{activeLogement.title}</h1>
            <h2 className="logements-location">{activeLogement.location}</h2>
          </div>
          <ul className="tags">
            {activeLogement.tags.map((tag, index) => (
              <li className="logements-tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="logements-user-stars">
          <div className="user">
            <div className="logements-host">
              <p className="name">{activeLogement.host.name.split(" ")[0]}</p>
              <p className="lastname">{activeLogement.host.name.split(" ")[1]}</p>
            </div>
            <img
              src={activeLogement.host.picture}
              alt={`Profil de ${activeLogement.host.name}`}
            />
          </div>
          <Note />
        </div>
      </div>

      <div className="colapse-box">
        <Colapse title="Description" text={activeLogement.description} isList={false}/>

        <Colapse title="Equipements" isList={true} list={activeLogement.equipments} />
        
       
      </div>
    </div>
  );
};

export default Logement;
/*** {Array.isArray(Logement.equipements) && (
          <ul>
            {Logement.equipements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}*/