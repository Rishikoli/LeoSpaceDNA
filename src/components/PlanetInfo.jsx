// PlanetInfo.js
import React from "react";
import "./Planetmodel.css";

const PlanetInfo = ({ name, title, facts }) => {
  return (
    <div className="info-container">
      <div className="corner-box top-left">
        <h1 className="font-Nebula font-medium text-7xl">{name}</h1>
        <p className="font-medium text-4xl">{title}</p>
      </div>
      <div className="corner-box bottom-left">
        <p>{facts}</p>
      </div>
    </div>
  );
};

export default PlanetInfo;
