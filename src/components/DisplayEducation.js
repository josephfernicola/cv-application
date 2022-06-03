import React, { useState } from "react";

const DisplayEducation = (props) => {
  const { educationArray } = props;
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
    e.target.parentElement.parentElement.remove();
  };

  return (
    <div className="entireEducation">
      {educationArray.map((arr) => {
        return (
          <div
            key={arr.id}
            className="educationDisplay"
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
          >
            <div className="leftEducation">
              <div>{arr.school}</div>
              <div>{arr.schoolCity}</div>
              <div>
                {arr.schoolFrom} - {arr.schoolTo}
              </div>
              <div>{arr.degree}</div>
              <div>{arr.schoolAchievements}</div>
            </div>
            <div className="rightEducation">
              <div className={closeButton} onClick={removeItem}>
                X
              </div>
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayEducation;
