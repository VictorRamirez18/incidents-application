import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="border border-black flex justify-end p-4 gap-4 bg-gray-400">
      <Link
        to="/"
        className={`border-black p-1 ${
          location.pathname === "/" ? "border-b-2" : ""
        }`}
      >
        <h2>Create new Incident</h2>
      </Link>
      <Link
        to="/Incidents"
        className={`border-black p-1 ${
          location.pathname === "/Incidents" ? "border-b-2" : ""
        }`}
      >
        <h2>See all incidents</h2>
      </Link>
    </div>
  );
}

export default Navbar;
