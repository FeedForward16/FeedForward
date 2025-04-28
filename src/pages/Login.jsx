import React from "react";

const Login = ({ email, password, onEmailChange, onPasswordChange, onLogin}) => {
  

  return (
    <form onSubmit={onLogin}>
      <h2>Login</h2>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          required
        />
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </div>

      <div>
         <button type="submit" >
          submit
        </button>
      </div>
    </form>
  );
};

export default Login;
