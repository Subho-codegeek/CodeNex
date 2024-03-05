import React from 'react';
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate('/room');
  };

  const signUp = () => {
    navigate('/signup');
  }

  return (
    <div className="container">
      <div className="header">
        <h1>CodeNEX</h1>
        <p>Coding. Collaborate. Create.</p>
      </div>
      <div className="sign-form">
        <h2>Sign In</h2>
        <button className="google-btn">Sign in with Google</button>
        <button className="github-btn">Sign in with Github</button>
        <form action="#" onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <button type="submit">SIGN IN</button>
        </form>
        <p>Already have an account? <a href="#" onClick={signUp}>Sign Up</a></p>
      </div>
    </div>
  );
}

export default SignIn;
