import React from 'react';
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    const navigate = useNavigate();

    const handleSignUp = (event) => {
      event.preventDefault(); 
      navigate('/room');
    };

    const signIn = () => {
      navigate('/');
    }

  return (
    <div className="container">
      <div className="header">
        <h1>CodeNEX</h1>
        <p>Coding. Collaborate. Create.</p>
      </div>
      <div className="sign-form">
        <h2>Sign Up</h2>
        <button className="google-btn">Sign up with Google</button>
        <button className="github-btn">Sign up with Github</button>
        <form action="#" onSubmit={handleSignUp}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms" /> I agree to the terms & conditions
          </label>
          <button type="submit">SIGN UP</button>
        </form>
        <p>Already have an account? <a href="#" onClick={signIn}>Sign In</a></p>
      </div>
    </div>
  );
}

export default SignUpForm;
