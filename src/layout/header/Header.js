import React from "react";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/icons/logo-header.svg";
import "../header/header.css";
const Header = () => {
  return (
    <header>
      <div className="logo-header">
        <img src={logoHeader} alt="logo kasa orange" />
      </div>
      <nav>
        <ul className="about-list">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "link active" : "link";
            }}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => {
              return isActive ? "link active" : "link";
            }}
          >
            A Propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
