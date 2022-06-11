import React, { useState } from "react";
import ContactInfo from "./ContactInfo.js";

const Header = () => {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [currentRole, setCurrentRole] = useState("Current Role");

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
    if (e.target.value) {
      setFirstName(e.target.value);
    }
  };

  const handleLastNameKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        setLastName(e.target.value);
      }
    }
  };
  const handleLastNameBlur = (e) => {
    if (e.target.value) {
      setLastName(e.target.value);
    }
  };

  const handleFirstNameKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        setFirstName(e.target.value);
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
    if (e.target.value) {
      setCurrentRole(e.target.value);
    }
  };

  const handleCurrentRoleKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        setCurrentRole(e.target.value);
      }
    }
  };

  return (
    <div className="topPage">
      <div className="headerContainer">
        <div className="left">
          <div className="firstNameContainer">
            <h1 onClick={displayFirstNameInput} className="firstName">
              {firstName}
            </h1>
          </div>
          <div className="lastNameContainer">
            <h1 onClick={displayLastNameInput} className="lastName">
              {lastName}
            </h1>
          </div>
          <div className="currentRoleContainer">
            <span onClick={displayCurrentRoleInput} className="currentRole">
              {currentRole}
            </span>
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
