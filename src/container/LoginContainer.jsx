import React, { useState } from "react";
import LoginPage from "../pages/Login/LoginPage";
const LoginContainer = ({ onClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <LoginPage
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onLogin={handleLogin}
      onSignupClick={onClick}
    />
  );
};

export default LoginContainer;
