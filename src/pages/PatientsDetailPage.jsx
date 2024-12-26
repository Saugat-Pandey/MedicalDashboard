import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import './PatientsDetailPage.css';


function PatientsDetailPage() {
    return (
        <div className="container">
            <div className="Sidebar"><Sidebar name="Selma Lepka"/></div>
            <div className="PreviousNote">
                <h1>Notiz 1</h1>
                <p>Text Text Text</p>
            </div>
            <div className="NewNote">
                <h1>Neue Notiz</h1>
                <textarea></textarea>
                <button>Speichern</button>
            </div>
            <div className="PatientMainContent">
                <div className="PatientHead">
                    <div className="PatientName">
                        <h1>Selma Lepka</h1>
                    </div>
                    <div className="PatientGeneral">
                        <table id={"patientGeneralTable"}>
                            <tbody>
                            <tr>
                                <td>Birthday: 02.02.2004</td>
                                <td>Gender: Female</td>
                                <td>Last Visit: 12.08.2024</td>

                            </tr>
                            <tr>
                                <td>Weight: 70kg</td>
                                <td>Height: 166cm</td>
                                <td>Insurance: TK</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                <div className="PatientInfos">
                    <h1>infos, allergien etc. </h1>
                    <p>Allergies</p>
                    <p>Text Text Text </p>
                    <p>Text Text Text </p>
                    <p>Current Diagnos</p>
                    <p>Text Text Text </p>
                    <p>Text Text Text </p>
                    <p>Current Medication</p>
                    <p>Text Text Text </p>
                </div>
                <div className="PatientImage">
                    <img src="/src/assets/selma.jpg" alt="Selma Lepka" className="profile-image"/>
                </div>

                <div className="Timeline">
                    <h1>Timeline</h1>
                </div>
            </div>
        </div>
    );
}

export default PatientsDetailPage;

