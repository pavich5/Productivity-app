import React from "react";
import PlanetListItem from '../PlanetListItem/PlanetListItem';
import './PlanetList.css';

export const PlanetList = (props) => {
  return (
    <>
      {props.planets.length === 0 && (
        <div className="PlanetList">Loading...</div>
      )}
      <ul className="PlanetList">
        {props.planets.map((planet, planetIndex) => (
          <PlanetListItem
            onSelectPlanet={props.onSelectPlanet}
            isSelected={props.selectedPlanet?.name === planet.name}
            key={planet.name + planetIndex}
            name={planet.name}
            planetIndex={planetIndex}
          />
        ))}
      </ul>
    </>
  );
};
