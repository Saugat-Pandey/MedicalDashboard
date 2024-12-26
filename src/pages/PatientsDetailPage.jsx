import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import './PatientsDetailPage.css';



function PatientsDetailPage() {
    return (
        <div className="patientsDetailPageContainer">
            <Sidebar name='Selma Lepka' image='/src/assets/selma.jpg'/>
            <h1>Grid für Layout anlegen - PatientDetailPage</h1>
        </div>
    );
}

export default PatientsDetailPage;
