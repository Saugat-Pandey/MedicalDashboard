import React from 'react';
import './Sidebar.css';  // Import the CSS for the sidebar
import doctorImage from '/src/assets/doctor.jpeg';
import Button from "./Button.jsx";
import PropTypes from 'prop-types';

function Sidebar({ name = ""}) {
    let content = null;

    if (name === "Selma Lepka") {
        content = (
            <>
                <hr className="divider" />

                <p>Birthday: </p>
                <p>Gender: </p>
                <p>Weight: </p>
                <p>Height: </p>
                <p>Insurance: </p>
                <p>Last Visit: </p>
            </>
        );
    }

    return (
        <aside className="sidebar">
            {/* Doctor's Picture */}
            <div className="doctor-profile">
                <img src={doctorImage} alt="profile-image" className="profile-image"/>
                <h3>{"Dr. Mustermann"}</h3>
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

            {content}
        </aside>
    );
}

Sidebar.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
};

export default Sidebar;