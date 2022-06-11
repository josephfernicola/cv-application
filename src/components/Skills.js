import React, { useState } from "react";
import DisplaySkills from "./DisplaySkills";
import uniqid from "uniqid";

const Skills = () => {
  const [skillsForm, setSkillsForm] = useState("");
  const [skillsArray, setSkillsArray] = useState([]);
  const handleSkillsForm = () => {
    setSkillsForm(
      <form className="skillsForm" onSubmit={handleSubmit}>
        <label htmlFor="skills">Skills: </label>
        <input type="text" placeholder="Skills" name="skills"></input>
        <div className="submitAndCancelButtons">
          <button className="submit" type="submit">
            Submit
          </button>
          <button type="button" onClick={handleSkillsCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  };
  const handleSkillsCancel = () => {
    setSkillsForm("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSkillsForm("");
    const newArr = [
      {
        skills: e.target.skills.value,
        id: uniqid(),
      },
    ];
    setSkillsArray(skillsArray.concat(newArr));
  };

  return (
    <div className="generalInfoContainer">
      <h1 className="generalHeader">Skills</h1>
      <button onClick={handleSkillsForm} className="generalButton">
        + Skills
      </button>
      <div>{skillsForm}</div>
      <DisplaySkills skillsArray={skillsArray} />
    </div>
  );
};

export default Skills;
