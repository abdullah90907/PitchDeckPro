import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './EntrepreneurDashboard.css';

function EntrepreneurDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="entrepreneur-dashboard-page">
            <Navbar />
            <div className="entrepreneur-dashboard">
                <div className="sidebar">
                    <button className="menu-btn" onClick={toggleMenu}>☰</button>
                    {isMenuOpen && (
                        <div className="menu">
                            <div className="menu-item">Dashboard</div>
                            <div className="menu-item">Analyzing Pitch deck</div>
                            <Link to="/signin">
                                <button className="login-btn">Login</button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="content">
                    <div className="top-bar">
                        <input type="text" placeholder="Search..." className="search-bar" />
                        <button className="new-task-btn">New Task</button>
                    </div>

                    <section className="profile-section">
                        <h2>Profile</h2>
                        <hr />
                        <div className="profile-setup">
                            <p>Profile Setup</p>
                            <button className="upload-btn">Upload PitchDeck
                            <form>
                                <input type="file" id="myFile" name="filename"></input>
                            </form>
                            </button>
                            <img src=".\src\img\Pitch.jpg" alt="Profile" className="profile-img" />
                        </div>
                        <hr />
                    </section>

                    <section className="contact-info-section">
                        <h2>Contact Information</h2>
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name" className="input-field" />
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your email address" className="input-field" />
                        <button className="submit-btn">Submit</button>
                    </section>

                    <div className="bottom-buttons">
                        <button className="cancel-btn">Cancel</button>
                        <button className="save-changes-btn">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EntrepreneurDashboard;
