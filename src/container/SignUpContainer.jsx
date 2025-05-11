import React, { useState } from "react";
import Signup from "../pages/Signup/Signup";
const SignUpContainer = ({onClick}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirmpassword });
  }

  return (
    <Signup
      name ={name}
      email={email}
      password={password}
      confirmpassword={confirmpassword}
      onNameChange={(e) => setName(e.target.value)}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onConfirmingPassword={(e) => setConfirmPassword(e.target.value)}
      onSignUp ={handleSignUp}
      onLoginClick={onClick}
    />
  );
};

export default SignUpContainer;
