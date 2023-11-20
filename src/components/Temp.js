import React from 'react';
//import Weathercard from "./weathercard";
import "./style.css";


const Temp = () => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            //value={searchValue}
            //onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            //onClick={getWeatherInfo}>
            >
            Search
          </button>
        </div>
      </div>

      {/* our temp card  
      //<//Weathercard {...tempInfo} />*/}
    </>
  )
}

export default Temp
