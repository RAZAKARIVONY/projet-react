import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigateurBar.css";

function NavigateurBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              CodeBucks
              <i className="fas fa-code"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/monrecrutement"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Recrutement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/premiercontrat"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  1ere Contrat
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/moncontrat2"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  2eme Contrat
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/moncontrat3"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  3eme Contrat
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavigateurBar;
