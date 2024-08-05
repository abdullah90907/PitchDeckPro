import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Navbar from './Navbar';

function SignIn() {
  return (
    <div>
      <Navbar />
      <div className="signin-page">
        <div className="signin-form-container">
          <h1>Sign In</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign In</button>
          </form>
          <div className="signin-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <br />
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
