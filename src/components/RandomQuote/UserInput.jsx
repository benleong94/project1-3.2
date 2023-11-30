import React, { useEffect } from "react";
import "./UserInput.css"
import { useState } from "react";

function UserInput({inputLabel, optionName, onDropdownChange, options}) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    onDropdownChange(selectedOption )
  }, [selectedOption])

  return (
    <div>
      <label>{inputLabel}: </label>
      <select
        name={optionName}
        value={selectedOption}
        onChange={handleChange}>
        <option value="">Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserInput;
