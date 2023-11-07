import React from "react";
import "./PostalCodeInput.css";

const PostalCodeInput = ({
  userPostalCode,
  countryCode,
  inputValue,
  setInputValue,
  handleOptions,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    userPostalCode(countryCode, inputValue);
  };

  return (
    <div className="postalCode-container">
      <select onChange={handleOptions}>
        <option value="IN">India</option>
        <option value="JP">Japan</option>
      </select>

      <input
        placeholder="Enter code"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
