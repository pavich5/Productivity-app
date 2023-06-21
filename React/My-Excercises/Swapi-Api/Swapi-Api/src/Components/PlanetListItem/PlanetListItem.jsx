import React from "react";
import './PlanetListItem.css'


const PlanetListItem = (props) => {
  return (
    <li
      style={{
        backgroundColor: props.isSelected && "rgb(134, 199, 255)",
      }}
      onClick={() => {
        props.onSelectPlanet(props.planetIndex);
      }}
      className="PlanetListItem"
    >
      {props.name}
    </li>
  );
};

export default PlanetListItem
