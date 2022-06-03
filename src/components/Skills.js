import React, { Component } from "react";
import DisplaySkills from "./DisplaySkills";
import uniqid from "uniqid";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      title: "Skills",
      button: "+ Skills",
      skillsForm: "",
      skillsList: "",
      skillsArray: [],
    };
  }
  handleSkillsForm = () => {
    this.setState({
      skillsForm: (
        <form className="skillsForm" onSubmit={this.handleSubmit}>
          <label htmlFor="skills">Skills: </label>
          <input type="text" placeholder="Skills" name="skills"></input>
          <div className="submitAndCancelButtons">
            <button className="submit" type="submit">
              Submit
            </button>
            <button type="button" onClick={this.handleSkillsCancel}>
              Cancel
            </button>
          </div>
        </form>
      ),
    });
  };
  handleSkillsCancel = () => {
    this.setState({
      skillsForm: "",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      skillsForm: "",
    });
    const newArr = [
      {
        skills: e.target.skills.value,
        id: uniqid(),
      },
    ];
    this.setState({
      skillsArray: this.state.skillsArray.concat(newArr),
    });
  };

  render() {
    return (
      <div className="generalInfoContainer">
        <h1 className="generalHeader">{this.state.title}</h1>
        <button onClick={this.handleSkillsForm} className="generalButton">
          {this.state.button}
        </button>
        <div>{this.state.skillsForm}</div>
        <DisplaySkills skillsArray={this.state.skillsArray} />
      </div>
    );
  }
}

export default Skills;
