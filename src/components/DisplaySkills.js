import React, { useState } from "react";

const DisplaySkills = (props) => {
  const { skillsArray } = props;
  const [closeButton, setDisplay] = useState("notDisplayed");
  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notDisplayed");
  };
  const removeItem = (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
  };

  return (
    <div>
      {skillsArray.map((arr) => {
        return (
          <ul
            key={arr.id}
            className="skillsList"
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
          >
            <li>{arr.skills}</li>
            <li className={closeButton} onClick={removeItem}>
              X
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default DisplaySkills;
