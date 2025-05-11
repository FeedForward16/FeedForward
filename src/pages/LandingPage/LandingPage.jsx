// src/pages/LandingPage.jsx
import React, { useState } from "react";
import "./landing.css";
import LoginContainer from "../../container/LoginContainer";
import SignUpContainer from "../../container/SignUpContainer";
const LandingPage = () => {
  const [display, setDisplay] = useState(true);

  const signUphandler = () => {
    setDisplay(false);
  };
  const Loginhandler = () => {
    setDisplay(true);
  };
  return (
    <div className="login-container">
      <header className="header">
        <h1>
          Feed<span className="highlight">Forward</span>
        </h1>
        <nav className="nav">
          <a href="#dashboard">Dashboard</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <div className="content">
        <div className="info">
          <h2>
            Collect video feedback with{" "}
            <span className="highlight">precision</span>
          </h2>
          <p>
            FeedForward allows you to share videos and collect
            timestamp-specific feedback, making collaboration seamless and
            efficient.
          </p>
          <button className="dashboard-button">Go to Dashboard</button>
        </div>

        {display ? (
          <LoginContainer onClick={signUphandler} />
        ) : (
          <SignUpContainer onClick={Loginhandler}/>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
