import React, { useState } from "react";
import DisplayExperience from "./DisplayExperience";
import uniqid from "uniqid";

const Experience = () => {
  const [experienceForm, setExperienceForm] = useState("");
  const [experienceArray, setExperienceArray] = useState([]);

  const handleExperienceForm = () => {
    setExperienceForm(
      <form className="experienceForm" onSubmit={handleSubmit}>
        <label htmlFor="company">Company: </label>
        <input type="text" placeholder="Company Name" name="company"></input>
        <br></br>
        <label htmlFor="experienceCity">City: </label>
        <input type="text" placeholder="City" name="experienceCity"></input>
        <br></br>
        <label htmlFor="experienceFrom">From: </label>
        <input type="text" placeholder="From" name="experienceFrom"></input>
        <br></br>
        <label htmlFor="experienceTo">To: </label>
        <input type="text" placeholder="To" name="experienceTo"></input>
        <br></br>
        <label htmlFor="role">Role: </label>
        <input type="text" placeholder="Role" name="role"></input>
        <br></br>
        <label htmlFor="duties">Job Duties: </label>
        <textarea
          placeholder="Job Duties"
          name="duties"
          rows="8"
          cols="70"
        ></textarea>
        <div className="submitAndCancelButtons">
          <button className="submit" type="submit">
            Submit
          </button>
          <button type="button" onClick={handleExperienceCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  };
  const handleExperienceCancel = () => {
    setExperienceForm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceForm("");
    const newArr = [
      {
        company: e.target.company.value,
        experienceCity: e.target.experienceCity.value,
        experienceFrom: e.target.experienceFrom.value,
        experienceTo: e.target.experienceTo.value,
        role: e.target.role.value,
        duties: e.target.duties.value,
        id: uniqid(),
      },
    ];
    setExperienceArray(experienceArray.concat(newArr));
  };
  return (
    <div className="experienceContainer">
      <h1 className="experienceHeader">Experience</h1>
      <button onClick={handleExperienceForm} className="experienceButton">
        + Experience
      </button>
      <div>{experienceForm}</div>
      <DisplayExperience experienceArray={experienceArray} />
    </div>
  );
};

export default Experience;
