import React, { useState } from "react";
import DisplayEducation from "./DisplayEducation";
import uniqid from "uniqid";

const Education = () => {
  const [educationForm, setEducationForm] = useState("");
  const [educationArray, setEducationArray] = useState([]);

  const handleEducationForm = () => {
    setEducationForm(
      <form className="educationForm" onSubmit={handleSubmit}>
        <label htmlFor="school">University or School Name: </label>
        <input type="text" placeholder="School Name" name="school"></input>
        <br></br>
        <label htmlFor="schoolCity">City: </label>
        <input type="text" placeholder="City" name="schoolCity"></input>
        <br></br>
        <label htmlFor="schoolFrom">From: </label>
        <input type="text" placeholder="From" name="schoolFrom"></input>
        <br></br>
        <label htmlFor="schoolTo">To: </label>
        <input type="text" placeholder="To" name="schoolTo"></input>
        <br></br>
        <label htmlFor="degree">Degree: </label>
        <input type="text" placeholder="Degree" name="degree"></input>
        <br></br>
        <label htmlFor="schoolAchievements">Further Achievements: </label>
        <textarea
          placeholder="Further Achievements"
          name="schoolAchievements"
          rows="8"
          cols="70"
        ></textarea>
        <div className="submitAndCancelButtons">
          <button className="submit" type="submit">
            Submit
          </button>
          <button type="button" onClick={handleEducationCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  };
  const handleEducationCancel = () => {
    setEducationForm("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationForm("");
    const newArr = [
      {
        school: e.target.school.value,
        schoolCity: e.target.schoolCity.value,
        schoolFrom: e.target.schoolFrom.value,
        schoolTo: e.target.schoolTo.value,
        degree: e.target.degree.value,
        schoolAchievements: e.target.schoolAchievements.value,
        id: uniqid(),
      },
    ];
    setEducationArray(educationArray.concat(newArr));
  };

  return (
    <div className="generalInfoContainer">
      <h1 className="generalHeader">Education</h1>
      <button onClick={handleEducationForm} className="generalButton">
        + Education
      </button>
      <div>{educationForm}</div>
      <DisplayEducation educationArray={educationArray} />
    </div>
  );
};

export default Education;
