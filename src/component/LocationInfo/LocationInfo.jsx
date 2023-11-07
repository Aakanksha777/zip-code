import React from "react";
import "./LocationInfo.css";
import Loader from "../Loader/Loader";

const LocationInfo = ({ locationData, loading, error, handleClear }) => {

  if (loading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h3 className="catch-error">Sorry, No places found. Please enter a different Zip Code</h3>;
  }

  return (
    <div className="location-container">
      <div>
        <ol>
          {locationData.places && locationData.places.map((item, index) => {
            return (
              <div className="location">
                <li key={index}>
                  <p>Country : {locationData.country} </p>
                  <p>State: {item.state}</p>
                  <p>State Abbreviation: {item["state abbreviation"]}</p>
                  <p>place name : {item["place name"]}</p>
                </li>
              </div>
            );
          })}
        </ol>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default LocationInfo;
