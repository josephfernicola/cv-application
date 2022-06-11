import React, { useState, useEffect } from "react";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const ContactInfo = () => {
  const [addressOne, setAddressOne] = useState("Address 1");
  const [addressTwo, setAddressTwo] = useState("Address 2");
  const [phone, setPhone] = useState("Phone Number");
  const [email, setEmail] = useState("Email");
  const [linkedin, setLinkedin] = useState("Linkedin");

  const displayAddressOneInput = () => {
    setAddressOne(
      <input
        type="text"
        placeholder="Address 1"
        name="addressOne"
        onKeyDown={handleAddressOneKeyDown}
        onBlur={handleAddressOneBlur}
      ></input>
    );
  };
  const handleAddressOneBlur = (e) => {
    if (e.target.value) {
      setAddressOne(e.target.value);
    }
  };
  const handleAddressOneKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        setAddressOne(e.target.value);
      }
    }
  };

  const displayAddressTwoInput = () => {
    setAddressTwo(
      <input
        type="text"
        placeholder="Address 2"
        name="addressTwo"
        onKeyDown={handleAddressTwoKeyDown}
        onBlur={handleAddressTwoBlur}
      ></input>
    );
  };

  const handleAddressTwoBlur = (e) => {
    if (e.target.value) {
      setAddressTwo(e.target.value);
    }
  };

  const handleAddressTwoKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        setAddressTwo(e.target.value);
      }
    }
  };

  const displayPhoneInput = () => {
    setPhone(
      <input
        type="text"
        placeholder="Phone Number"
        name="Phone"
        onKeyDown={handlePhoneKeyDown}
        onBlur={handlePhoneBlur}
      ></input>
    );
  };

  const handlePhoneBlur = (e) => {
    if (e.target.value) {
      setPhone(e.target.value);
    }
  };

  const handlePhoneKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        setPhone(e.target.value);
      }
    }
  };

  const displayEmailInput = () => {
    setEmail(
      <input
        type="email"
        placeholder="Email"
        name="mail"
        onKeyDown={handleEmailKeyDown}
        onBlur={handleEmailBlur}
      ></input>
    );
  };

  const handleEmailBlur = (e) => {
    if (e.target.value) {
      setEmail(e.target.value);
    }
  };

  const handleEmailKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        setEmail(e.target.value);
      }
    }
  };

  const displayLinkedinInput = () => {
    setLinkedin(
      <input
        type="text"
        placeholder="Linkedin"
        name="linkedin"
        onKeyDown={handleLinkedinKeyDown}
        onBlur={handleLinkedinBlur}
      ></input>
    );
  };

  const handleLinkedinBlur = (e) => {
    if (e.target.value) {
      setLinkedin(e.target.value);
    }
  };

  const handleLinkedinKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        setLinkedin(e.target.value);
      }
    }
  };

  return (
    <div className="contactContainer">
      <h4 onClick={displayAddressOneInput}>{addressOne}</h4>
      <h4 onClick={displayAddressTwoInput}>{addressTwo}</h4>
      <div className="phoneWithIcon">
        <AiOutlinePhone />
        <div onClick={displayPhoneInput}>{phone}</div>
      </div>
      <div className="emailWithIcon">
        <AiOutlineMail />
        <div onClick={displayEmailInput}>{email}</div>
      </div>
      <div className="linkedIn">
        <ImLinkedin />
        <div onClick={displayLinkedinInput}>{linkedin}</div>
      </div>
    </div>
  );
};

export default ContactInfo;
