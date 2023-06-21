import React from "react";
import "./PlanetDetails.css";

export const PlanetDetails = (props) => {
  console.log(props);
  return (
    <div className="PlanetDetails">
      <div>
        <strong>Name: </strong>
        {props.selectedPlanet?.name}
      </div>
      <div>
        <strong>rotation_period: </strong>
        {props.selectedPlanet?.rotation_period}
      </div>
      <div>
        <strong>Diameter: </strong>
        {props.selectedPlanet?.diameter}
      </div>
      <div>
        <strong>Climate: </strong>
        {props.selectedPlanet?.climate}
      </div>
      <div>
        <strong>Gravity: </strong>
        {props.selectedPlanet?.gravity}
      </div>
      <div>
        <strong>Terrain: </strong>
        {props.selectedPlanet?.terrain}
      </div>
    </div>
  );
};
