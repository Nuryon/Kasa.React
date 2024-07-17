import React from "react";
import { Link } from "react-router-dom";
import "./error404.css";
const Error404 = () => {
  return (
    <div className="main-container">
      <div className="error-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link-home">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default Error404;
