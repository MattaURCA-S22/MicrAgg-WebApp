import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">

      <Link to="/VideoPlayer">
        <button className="NavBar-Button">Video Player</button>
      </Link>

      <Link to="/DashboardLogin">
        <button className="NavBar-Button">Dashboard Login</button>
      </Link>

      <Link to="/DashboardMain">
        <button className="NavBar-Button">Dashboard</button>
      </Link>

      <Link to="/DashboardData">
        <button className="NavBar-Button">DashboardData</button>
      </Link>

      <Link to="/">
        <button className="NavBar-Button">Consent</button>
      </Link>

      <Link to="/SurveyPage">
        <button className="NavBar-Button">Survey</button>
      </Link>

    </div>
  );
}
