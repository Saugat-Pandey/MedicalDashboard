import React from 'react';
import './Patients.css';
import Sidebar from '../components/Sidebar';
import PatientTable from "../components/PatientTable.jsx";

function Patients() {
    return (
        <div id={"patients-container"}>
            <Sidebar/>
            <PatientTable/>

        </div>
    );
}

export default Patients;
