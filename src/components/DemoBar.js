import React from "react";
import "./DemoBar.css"
import { Link } from "react-router-dom";

export default function DemoBar() {
  return (
    <div className="DemoBar">
      <Link to="/DashboardLogin">
        <button className="DemoBar-Button">Dashboard Login</button>
      </Link>
    </div>
  );
}
