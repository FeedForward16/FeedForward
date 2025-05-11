import React from "react";
import "./Signup.css"; // Link to the external CSS file

const Signup = ({
  name,
  email,
  password,
  confirmpassword,
  onEmailChange,
  onPasswordChange,
  onConfirmingPassword,
  onSignUp,
  onLoginClick,
}) => {
  return (
    <div className="signup"> 
    <h3>Sign Up</h3>
    <p>Fill the information to create your account</p>
    <form onSubmit={onSignUp}>
      <label>Name</label>
      <input
        type="name"
        value={name}
        placeholder="Enter your Name"
        required
      />
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Enter your email"
        required
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Enter your password"
        required
      />
      <label>Confirm Password</label>
      <input
        type="password"
        value={confirmpassword}
        onChange={onConfirmingPassword}
        placeholder="Confirming your password"
        required
      />
      <button type="submit" className="signup-button">
        Signup
      </button>
    </form>
    <p className="loginagain">
      Already have an account?{" "}
      <a onClick={onLoginClick} style={{ cursor: "pointer" }}>
        Login
      </a>
    </p>
  </div>
  );
};
export default Signup;
      