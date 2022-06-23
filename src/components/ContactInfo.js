import React, { useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const ContactInfo = () => {
  const [addressOne, setAddressOne] = useState("Address 1");
  const [addressTwo, setAddressTwo] = useState("Address 2");
  const [phone, setPhone] = useState("Phone Number");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("Email");
  const [emailError, setEmailError] = useState("");
  const [linkedin, setLinkedin] = useState("Linkedin");
  const [linkedinError, setLinkedinError] = useState("");

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
    if (validatePhoneNumber(e.target.value)) {
      setPhone(e.target.value);
      setPhoneError("");
    }
  
  if (!validatePhoneNumber(e.target.value)) {
      setPhoneError("*Please enter valid phone number")
  }

  };

  const handlePhoneKeyDown = (e) => {
      if (e.key === "Enter") {
        if (validatePhoneNumber(e.target.value)) {
        setPhone(e.target.value);
        setPhoneError("")
      }
      if (!validatePhoneNumber(e.target.value)) {
        setPhoneError("*Please enter valid phone number")
    }
    }
  };

  const validatePhoneNumber = (number) => {
      return number.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateOnlyLetters = (input) => {
    return input.match(/[a-zA-Z]$/)
  }

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
    if (validateEmail(e.target.value)) {
      setEmail(e.target.value);
      setEmailError("");
    }
    if (!validateEmail(e.target.value)) {
        setEmailError("Please enter valid email address")
    }
  };

  const handleEmailKeyDown = (e) => {
      if (e.key === "Enter") {
        if (validateEmail(e.target.value)) {
        setEmail(e.target.value);
        setEmailError("");
      }
      else if (!validateEmail(e.target.value)) {
        setEmailError("*Please enter valid email address");
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
    if (validateOnlyLetters(e.target.value)) {
      setLinkedin(e.target.value);
      setLinkedinError("");
    }
    if (!validateOnlyLetters(e.target.value)) {
        setLinkedinError("*No numbers or special characters allowed")
    }
  };

  const handleLinkedinKeyDown = (e) => {
    if (e.key === "Enter") {
      if (validateOnlyLetters(e.target.value)) {
      setLinkedin(e.target.value);
      setLinkedinError("");
    }
    else if (!validateOnlyLetters(e.target.value)) {
      setLinkedinError("*No numbers or special characters allowed");
  }
}
};


  return (
    <div className="contactContainer">
      <h4 className="addressOne" onClick={displayAddressOneInput}>{addressOne}</h4>
      <h4 className="addressTwo" onClick={displayAddressTwoInput}>{addressTwo}</h4>
      <div className="phoneWithIcon">
        <AiOutlinePhone />
        <div onClick={displayPhoneInput}>{phone}<div className="phoneError">{phoneError}</div></div>
      </div>
      <div className="emailWithIcon">
        <AiOutlineMail />
        <div onClick={displayEmailInput}>{email}<div className="emailError">{emailError}</div></div>
      </div>
      <div className="linkedIn">
        <ImLinkedin />
        <div onClick={displayLinkedinInput}>{linkedin}<div className="linkedinError">{linkedinError}</div></div>
      </div>
    </div>
  );
};

export default ContactInfo;