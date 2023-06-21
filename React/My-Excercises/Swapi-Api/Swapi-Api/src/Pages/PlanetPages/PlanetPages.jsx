import Button from "../../Components/Button/Button";
import { PlanetDetails } from "../../Components/PlanetDetails/PlanetDetails";
import { PlanetList } from "../../Components/PlanetList/PlanetList";
import "./PlanetPages.css";
import { useEffect, useState } from "react";

const SWAPI_URL = "https://swapi.dev/api/planets";

export const PlanetPages = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isPlanetDetailsShown, setIsPlanetDetailsShown] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const getData = async () => {
    const response = await fetch(SWAPI_URL);
    const data = await response.json();
    console.log(data);
    setPlanets(data.results);
  };

  const fetchNext = async (currentPage) =>{
    const response = await fetch(SWAPI_URL + `?page=${currentPage}`);
    const data = await response.json();
    setCurrentPage(currentPage + 1)
    setPlanets(data.results);
  }

  const fetchPrevious = async (currentPage) =>{
    if(currentPage >= 0){
      const response = await fetch(SWAPI_URL + `?page=${currentPage}`);
      const data = await response.json();
      setCurrentPage(currentPage - 1)
      setPlanets(data.results);
    } else {
      console.log("cannot go bellow 0");
    }
   
  }

  const onSelectPlanet = (planetIndex) => {
    setSelectedPlanet(planets[planetIndex]);
  };

  const togglePlanetDetails = () => {
    setIsPlanetDetailsShown(!isPlanetDetailsShown);
  };

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div className="PlanetPages">
      <Button
        btnStyle={{ margin: "20px" }}
        btnText="Toggle Planet Details"
        onBtnClick={togglePlanetDetails}
      />
      <PlanetList
        planets={planets}
        selectedPlanet={selectedPlanet}
        onSelectPlanet={onSelectPlanet}
      />
      <div className="button-container">
        {currentPage > 1 && (
          <button onClick={() => fetchPrevious(currentPage)}>Previous</button>
        )}
        {planets.length > 0 && (
          <button onClick={() => fetchNext(currentPage)}>Next</button>
        )}
      </div>
      {isPlanetDetailsShown && <PlanetDetails selectedPlanet={selectedPlanet} />}
    </div>
  );
  
  
};
