import React, { useState } from "react";
import Login from "../pages/Login";
const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <Login
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onLogin={handleLogin}
    />
  );
};

export default LoginContainer;
