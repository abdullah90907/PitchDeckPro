import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">PitchDeckPro</div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/EntrepreneurDashboard">Entrepreneur</Link></li>
                <li>
                    <Link to="/investor">Investor</Link>
                </li>
                <li><Link to="/about">About</Link></li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
