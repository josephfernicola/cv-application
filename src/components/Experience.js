import React, { Component } from "react";
import DisplayExperience from "./DisplayExperience";
import uniqid from "uniqid";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      title: "Work Experience",
      button: "+ Experience",
      experienceForm: "",
      experienceList: "",
      experienceArray: [],
    };
  }
  handleExperienceForm = () => {
    this.setState({
      experienceForm: (
        <form className="experienceForm" onSubmit={this.handleSubmit}>
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
            <button type="button" onClick={this.handleExperienceCancel}>
              Cancel
            </button>
          </div>
        </form>
      ),
    });
  };
  handleExperienceCancel = () => {
    this.setState({
      experienceForm: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      experienceForm: "",
    });
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
    this.setState({
      experienceArray: this.state.experienceArray.concat(newArr),
    });
  };

  render() {
    return (
      <div className="generalInfoContainer">
        <h1 className="generalHeader">{this.state.title}</h1>
        <button onClick={this.handleExperienceForm} className="generalButton">
          {this.state.button}
        </button>
        <div>{this.state.experienceForm}</div>
        <DisplayExperience experienceArray={this.state.experienceArray} />
      </div>
    );
  }
}

export default Experience;
