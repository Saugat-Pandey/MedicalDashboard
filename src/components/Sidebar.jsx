import React from 'react';
import './Sidebar.css';  // Import the CSS for the sidebar
import doctorImage from '/src/assets/doctor.jpeg';
import Button from "./Button.jsx";
import PropTypes from 'prop-types';

function Sidebar({ name = "Dr. Mustermann", image = doctorImage }) {
    return (
        <aside className="sidebar">
            {/* Doctor's Picture */}
            <div className="doctor-profile">
                <img src={image} alt="profile-image" className="profile-image"/>
                <h3>{name}</h3>
            </div>

            {/* Divider Line */}
            <hr className="divider" />

            {/* Navigation Buttons */}
            <nav className="nav-links">
                <ul>
                    <li><Button className="nav-button" to="/" button_text="Dashboard"></Button></li>
                    <li><Button className="nav-button" to="/patients" button_text="Patients"></Button></li>
                    <li><Button className="nav-button" to="/appointments" button_text="Appointments"></Button></li>
                    <li><Button className="nav-button" to="/settings" button_text="Settings"></Button></li>
                </ul>
            </nav>
        </aside>
    );
}

Sidebar.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
};

export default Sidebar;