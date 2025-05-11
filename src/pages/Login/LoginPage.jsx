// src/pages/LoginPage.jsx
import React from "react";
import "./LoginPage.css";
// import { useNavigate } from "react-router-dom";

const LoginPage = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onLogin,
  onSignupClick,
}) => {
  // const navigate = useNavigate();

  // const navHandler = () => {
  //   navigate("/sign-up");
  // };

  return (
    <div className="login">
      <h3>Login</h3>
      <p>Enter your credentials to access your account</p>
      <form onSubmit={onLogin}>
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup">
        Don't have an account?{" "}
        <a onClick={onSignupClick} style={{ cursor: "pointer" }}>
          SignUp
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
