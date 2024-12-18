import React from 'react';
import './Patients.css';
import Sidebar from '../components/Sidebar';

function Patients() {
    return (
        <div id={"patients-container"}>
            <Sidebar/>
            <h1>Patients Page</h1>
            {/* Add content for the Patients page here */}
        </div>
    );
}

export default Patients;
