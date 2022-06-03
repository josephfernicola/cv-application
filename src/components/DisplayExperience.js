import React, { useState } from "react";

const DisplayExperience = (props) => {
  const { experienceArray } = props;
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
      {experienceArray.map((arr) => {
        return (
          <div
            key={arr.id}
            className="workExperience"
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
          >
            <div className="leftSideExperience">
              <br></br>
              <div>{arr.company}</div>
              <div>{arr.role}</div>
              <br></br>
              <div>{arr.duties}</div>
            </div>
            <div className="roleAndDuties">
              <div>
                {arr.experienceFrom} - {arr.experienceTo}
              </div>
              <div>{arr.experienceCity}</div>
            </div>
            <div className={closeButton} onClick={removeItem}>
              X
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayExperience;
