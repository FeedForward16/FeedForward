import React from "react";
import "./Signup.css"; // Link to the external CSS file

const Signup = () => {
  return (
    <div className="login-container">
      <div className="content">
        <div className="SignUp">
          <h3>Create an Account</h3>
          <p>Fill in the information to create your account</p>
          <form>
            <label>Name</label>
            <input placeholder="Enter your name" required />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
            <button type="submit" className="SignUp-button">
              Sign Up
            </button>
          </form>
          <p className="Victory">
            Already have an account? <a href="#LoginPage">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
