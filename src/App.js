import React, { useState } from "react";
import "./App.css";
import PostalCodeInput from "./component/PostalCodeInput/PostalCodeInput";
import LocationInfo from "./component/LocationInfo/LocationInfo";

function App() {
  const [locationData, setLocationData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [countryCode, setCountryCode] = useState("IN");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLocation = async () => {
    try {
      setLoading(true);
      const url = `https://api.zippopotam.us/${countryCode}/${inputValue}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setLocationData(data);
    } catch (error) {
      setLocationData({});
      console.error("Error in API", error);
      setError(true);
    }
    setLoading(false);
  };

  const handleClear = () => {
    setLocationData({});
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="header">
        <h2 className="main">We just need your zip code</h2>
        <p className="text">please enter your zip code below.</p>
      </div>

      <div>
        <PostalCodeInput
          fetchPlaces={handleLocation}
          countryCode={countryCode}
          inputValue={inputValue}
          handleClear={handleClear}
          locationData={locationData}
          handleInput={(e) => setInputValue(e.target.value)}
          handleSelect={(e) => setCountryCode(e.target.value)}
        />
      </div>
      <div className="list">
        <LocationInfo
          locationData={locationData}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
