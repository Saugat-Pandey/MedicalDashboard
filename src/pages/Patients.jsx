import React from 'react';
import './Patients.css';
import Sidebar from '../components/Sidebar';
import PatientTable from "../components/PatientsPage.jsx";

function Patients() {
    return (
        <div id={"patients-container"}>
            <Sidebar/>
            <PatientTable/>
            {/* Add content for the Patients page here */}
        </div>
    );
}

export default Patients;
