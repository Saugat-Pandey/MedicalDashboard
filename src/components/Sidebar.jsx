/*import React from 'react';*/
import './components/Sidebar.css';  // Import the CSS for the sidebar
import doctorImage from './assets/doctor.jpeg';

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
                    <li><button className="nav-button">Dashboard</button></li>
                    <li><button className="nav-button">Patients</button></li>
                    <li><button className="nav-button">Appointments</button></li>
                    <li><button className="nav-button">Settings</button></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;