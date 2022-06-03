import React, { Component } from "react";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

class ContactInfo extends Component {
  constructor() {
    super();

    this.state = {
      addressOne: "Address 1",
      addressTwo: "Address 2",
      phone: "Phone Number",
      email: "Email",
      linkedin: "Linkedin",
    };
  }

  displayAddressOneInput = () => {
    this.setState({
      addressOne: (
        <input
          type="text"
          placeholder="Address 1"
          name="addressOne"
          onKeyDown={this.handleAddressOneKeyDown}
          onBlur={this.handleAddressOneBlur}
        ></input>
      ),
    });
  };

  handleAddressOneBlur = (e) => {
    if (e.target.value) {
      this.setState({
        addressOne: e.target.value,
      });
    }
  };

  handleAddressOneKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        this.setState({
          addressOne: e.target.value,
        });
      }
    }
  };

  displayAddressTwoInput = () => {
    this.setState({
      addressTwo: (
        <input
          type="text"
          placeholder="Address 2"
          name="addressTwo"
          onKeyDown={this.handleAddressTwoKeyDown}
          onBlur={this.handleAddressTwoBlur}
        ></input>
      ),
    });
  };

  handleAddressTwoBlur = (e) => {
    if (e.target.value) {
      this.setState({
        addressTwo: e.target.value,
      });
    }
  };

  handleAddressTwoKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        this.setState({
          addressTwo: e.target.value,
        });
      }
    }
  };

  displayPhoneInput = () => {
    this.setState({
      phone: (
        <input
          type="text"
          placeholder="Phone Number"
          name="Phone"
          onKeyDown={this.handlePhoneKeyDown}
          onBlur={this.handlePhoneBlur}
        ></input>
      ),
    });
  };

  handlePhoneBlur = (e) => {
    if (e.target.value) {
      this.setState({
        phone: e.target.value,
      });
    }
  };

  handlePhoneKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        this.setState({
          phone: e.target.value,
        });
      }
    }
  };
  displayEmailInput = () => {
    this.setState({
      email: (
        <input
          type="email"
          placeholder="Email"
          name="mail"
          onKeyDown={this.handleEmailKeyDown}
          onBlur={this.handleEmailBlur}
        ></input>
      ),
    });
  };

  handleEmailBlur = (e) => {
    if (e.target.value) {
      this.setState({
        email: e.target.value,
      });
    }
  };

  handleEmailKeyDown = (e) => {
    if (e.target.value) {
      if (e.key === "Enter") {
        this.setState({
          email: e.target.value,
        });
      }
    }
  };

  displayLinkedinInput = () => {
    this.setState({
      linkedin: (
        <input
          type="text"
          placeholder="Linkedin"
          name="linkedin"
          onKeyDown={this.handleLinkedinKeyDown}
          onBlur={this.handleLinkedinBlur}
        ></input>
      ),
    });
  };

  handleLinkedinBlur = (e) => {
    if (e.target.value) {
      this.setState({
        linkedin: e.target.value,
      });
    }
  };

  handleLinkedinKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        this.setState({
          linkedin: e.target.value,
        });
      }
    }
  };

  render() {
    return (
      <div className="contactContainer">
        <h4 onClick={this.displayAddressOneInput}>{this.state.addressOne}</h4>
        <h4 onClick={this.displayAddressTwoInput}>{this.state.addressTwo}</h4>
        <div class="phoneWithIcon">
          <AiOutlinePhone />
          <div onClick={this.displayPhoneInput}>{this.state.phone}</div>
        </div>
        <div class="emailWithIcon">
          <AiOutlineMail />
          <div onClick={this.displayEmailInput}>{this.state.email}</div>
        </div>
        <div class="linkedIn">
          <ImLinkedin />
          <div onClick={this.displayLinkedinInput}>{this.state.linkedin}</div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
