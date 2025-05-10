import { useState } from "react";
import Signup from "../pages/Signup/Signup";
const SignUpContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <Signup
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSignUp={handleSignUp}
    />
  );
};

export default SignUpContainer;
