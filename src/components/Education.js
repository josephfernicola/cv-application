import React, { Component } from "react";
import DisplayEducation from "./DisplayEducation";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      title: "Education",
      button: "+ Education",
      educationForm: "",
      eductationList: "",
      educationArray: [],
    };
  }
  handleEducationForm = () => {
    this.setState({
      educationForm: (
        <form className="educationForm" onSubmit={this.handleSubmit}>
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
            <button type="button" onClick={this.handleEducationCancel}>
              Cancel
            </button>
          </div>
        </form>
      ),
    });
  };
  handleEducationCancel = () => {
    this.setState({
      educationForm: "",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      educationForm: "",
    });
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
    this.setState({
      educationArray: this.state.educationArray.concat(newArr),
    });
  };

  render() {
    return (
      <div className="generalInfoContainer">
        <h1 className="generalHeader">{this.state.title}</h1>
        <button onClick={this.handleEducationForm} className="generalButton">
          {this.state.button}
        </button>
        <div>{this.state.educationForm}</div>
        <DisplayEducation educationArray={this.state.educationArray} />
      </div>
    );
  }
}

export default Education;
