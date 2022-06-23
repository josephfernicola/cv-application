import React, { useState } from "react";
import ContactInfo from "./ContactInfo.js";

const Header = () => {
  const [firstName, setFirstName] = useState("First Name");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("Last Name");
  const [lastNameError, setLastNameError] = useState("");
  const [currentRole, setCurrentRole] = useState("Current Role");
  const [currentRoleError, setCurrentRoleError] = useState("");

  const displayFirstNameInput = () => {
    setFirstName(
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onKeyDown={handleFirstNameKeyDown}
        onBlur={handleFirstNameBlur}
      ></input>
    );
  };
  const displayLastNameInput = () => {
    setLastName(
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onKeyDown={handleLastNameKeyDown}
        onBlur={handleLastNameBlur}
      ></input>
    );
  };

  const handleFirstNameBlur = (e) => {
    if (validateOnlyLetters(e.target.value)) {
      setFirstName(e.target.value);
      setFirstNameError("");
    }
    else if (!validateOnlyLetters(e.target.value)) {
      setFirstNameError("*No numbers or special characters allowed");
    }
  };

  const handleLastNameKeyDown = (e) => {
      if (e.key === "Enter") {
        if (validateOnlyLetters(e.target.value)) {
        setLastName(e.target.value);
        setLastNameError("")
      }
      else if (!validateOnlyLetters(e.target.value)) {
        setLastNameError("*No numbers or special characters allowed")
      }
    }
  };
  const handleLastNameBlur = (e) => {
    if (validateOnlyLetters(e.target.value)) {
      setLastName(e.target.value);
      setLastNameError("")
    }
    else if(!validateOnlyLetters(e.target.value)) {
      setLastNameError("*No numbers or special characters allowed")
    }
  };

  const handleFirstNameKeyDown = (e) => {

      if (e.key === "Enter") {
        if (validateOnlyLetters(e.target.value)) {
        setFirstName(e.target.value);
        setFirstNameError("")
      }
      else if(!validateOnlyLetters(e.target.value)) {
        setFirstNameError("*No numbers or special characters allowed")
      }

    }
  };
  const displayCurrentRoleInput = (e) => {
    setCurrentRole(
      <input
        type="text"
        placeholder="Current Role"
        name="currentRole"
        onKeyDown={handleCurrentRoleKeyDown}
        onBlur={handleCurrentRoleBlur}
      ></input>
    );
  };
  const handleCurrentRoleBlur = (e) => {
    if (validateOnlyLetters(e.target.value)) {
      setCurrentRole(e.target.value);
      setCurrentRoleError("");
    }
    else if (!validateOnlyLetters(e.target.value)) {
      setCurrentRoleError("*No numbers of special characters allowed")
    }
  };

  const handleCurrentRoleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (validateOnlyLetters(e.target.value)) {
        setCurrentRole(e.target.value);
        setCurrentRoleError("")
      }
      else if (!validateOnlyLetters(e.target.value)) {
        setCurrentRoleError("*No numbers of special characters allowed")
      }
    }
  };

  const validateOnlyLetters = (input) => {
    return input.match(/[a-zA-Z]$/)
  }

  return (
    <div className="topPage">
      <div className="headerContainer">
        <div className="left">
          <div className="firstNameContainer">
            <h1 onClick={displayFirstNameInput} className="firstName">
              {firstName}<div className="firstNameError">{firstNameError}</div>
            </h1>
          </div>
          <div className="lastNameContainer">
            <h1 onClick={displayLastNameInput} className="lastName">
              {lastName}<div className="lastNameError">{lastNameError}</div>
            </h1>
          </div>
          <div className="currentRoleContainer">
            <div onClick={displayCurrentRoleInput} className="currentRole">
              {currentRole}<div className="currentRoleError">{currentRoleError}</div>
            </div>
          </div>
        </div>
        <div className="right">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Header;
