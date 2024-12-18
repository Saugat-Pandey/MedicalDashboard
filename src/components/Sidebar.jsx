/*import React from 'react';*/
import './Sidebar.css';  // Import the CSS for the sidebar
import doctorImage from '/src/assets/doctor.jpeg';
import Button from "./Button.jsx";

function Sidebar() {
    return (
        <aside className="sidebar">
            {/* Doctor's Picture */}
            <div className="doctor-profile">
                <img src={doctorImage} alt="Doctor" style={{width: '150px', borderRadius: '100%'}}/>
                <h3>Dr. Mustermann</h3>
            </div>

            {/* Navigation Buttons */}
            <nav className="nav-links">
                <ul>
                    <li><Button className="nav-button" to="/">Dashboard</Button></li>
                    <li><Button className="nav-button" to="/patients">Patients</Button></li>
                    <li><Button className="nav-button" to="/appointments">Appointments</Button></li>
                    <li><Button className="nav-button" to="/settings">Settings</Button></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;