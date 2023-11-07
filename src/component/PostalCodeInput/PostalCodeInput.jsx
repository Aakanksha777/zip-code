import React from "react";
import "./PostalCodeInput.css";

const PostalCodeInput = ({
  fetchPlaces,
  countryCode,
  inputValue,
  handleInput,
  handleSelect,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlaces(countryCode, inputValue);
  };

  return (
    <div className="postalCode-container">
      <select onChange={handleSelect}>
        <option value="IN">India</option>
        <option value="JP">Japan</option>
      </select>

      <input
        placeholder="Enter code"
        value={inputValue}
        onChange={handleInput}
        className="postal postal-input"
        required={true}
      />
      <button onClick={handleSubmit} className="postal postal-btn">
        Check
      </button>
    </div>
  );
};

export default PostalCodeInput;
