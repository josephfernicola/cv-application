import React, { Component } from "react";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="title">Resume Builder App</h1>
      <div className="resumeTemplate">
        <Header />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default App;
