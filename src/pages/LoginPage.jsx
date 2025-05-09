import React from 'react';
import './LoginPage.css'; // Link to the external CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      <header className="header">
        <h1>Feed<span className="highlight">Forward</span></h1>
        <nav className="nav">
          <a href="#dashboard">Dashboard</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>
      </header>
      
      <div className="content">
        <div className="info">
          <h2>Collect video feedback with <span className="highlight">precision</span></h2>
          <p>
            FeedForward allows you to share videos and collect timestamp-specific feedback, making collaboration seamless and efficient.
          </p>
          <button className="dashboard-button">Go to Dashboard</button>
        </div>
        <div className="login">
          <h3>Login</h3>
          <p>Enter your credentials to access your account</p>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="signup">Don't have an account? <a href="#Signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
