import React, { Component } from "react";
import ContactInfo from "./ContactInfo.js";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      currentRole: "Current Role",
      input: true,
    };
  }

  displayFirstNameInput = () => {
    this.setState({
      firstName: (
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onKeyDown={this.handleFirstNameKeyDown}
          onBlur={this.handleFirstNameBlur}
        ></input>
      ),
    });
  };
  displayLastNameInput = () => {
    this.setState({
      lastName: (
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onKeyDown={this.handleLastNameKeyDown}
          onBlur={this.handleLastNameBlur}
        ></input>
      ),
    });
  };

  handleFirstNameBlur = (e) => {
    if (e.target.value) {
      this.setState({
        firstName: e.target.value,
      });
    }
  };

  handleLastNameKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        this.setState({
          lastName: e.target.value,
        });
      }
    }
  };
  handleLastNameBlur = (e) => {
    if (e.target.value) {
      this.setState({
        lastName: e.target.value,
      });
    }
  };

  handleFirstNameKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        this.setState({
          firstName: e.target.value,
        });
      }
    }
  };
  displayCurrentRoleInput = (e) => {
    this.setState({
      currentRole: (
        <input
          type="text"
          placeholder="Current Role"
          name="currentRole"
          onKeyDown={this.handleCurrentRoleKeyDown}
          onBlur={this.handleCurrentRoleBlur}
        ></input>
      ),
    });
  };
  handleCurrentRoleBlur = (e) => {
    if (e.target.value) {
      this.setState({
        currentRole: e.target.value,
      });
    }
  };

  handleCurrentRoleKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        this.setState({
          currentRole: e.target.value,
        });
      }
    }
  };

  render() {
    return (
      <div className="topPage">
        <div className="headerContainer">
          <div className="left">
            <div className="firstNameContainer">
              <h1 onClick={this.displayFirstNameInput} className="firstName">
                {this.state.firstName}
              </h1>
            </div>
            <div className="lastNameContainer">
              <h1 onClick={this.displayLastNameInput} className="lastName">
                {this.state.lastName}
              </h1>
            </div>
            <div className="currentRoleContainer">
              <span
                onClick={this.displayCurrentRoleInput}
                className="currentRole"
              >
                {this.state.currentRole}
              </span>
            </div>
          </div>
          <div className="right">
            <ContactInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
