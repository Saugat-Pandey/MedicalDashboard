import React from 'react';
import './patients.css';
import Sidebar from '../components/Sidebar';
import PatientTable from "../components/PatientTable.jsx";

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
