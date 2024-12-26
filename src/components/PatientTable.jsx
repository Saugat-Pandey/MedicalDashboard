import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientTable.css';

function PatientTable() {
    const [patients, setPatients] = useState([
        { PID: 337, FullName: "Selma Lepka", Sex: "Female", DoB: "02.02.2004", Insurance: "TK", LastVisit: "12.08.2024" },
        { PID: 600, FullName: "Ram Adhikari", Sex: "Male", DoB: "10.05.2002", Insurance: "AOK", LastVisit: "12.10.2022" },
        { PID: 509, FullName: "Vedant Vedant ", Sex: "Male", DoB: "17.02.2003", Insurance: "TK", LastVisit: "12.02.2023" },
        { PID: 123, FullName: "Michael Franke", Sex: "Male", DoB: "19.01.2000", Insurance: "TK", LastVisit: "12.05.2020" },
        { PID: 900, FullName: "Saugat Pandey", Sex: "Male", DoB: "02.09.2001", Insurance: "AOK", LastVisit: "12.09.2022" },
        { PID: 111, FullName: "Ghazal Ghazemi", Sex: "Female", DoB: "02.09.2000", Insurance: "TK", LastVisit: "12.12.2021" },
    ]);

    const navigate = useNavigate();

    const handleRowClick = (patient) => {
        if (patient.FullName === "Selma Lepka") {
            navigate('/patients-detail');
        }
    };

    return (
        <div className="patients-page-container">
            <table>
                <thead>
                <tr>
                    <th>PID</th>
                    <th>Full Name</th>
                    <th>Sex</th>
                    <th>Date of Birth</th>
                    <th>Insurance</th>
                    <th>Last Visit</th>
                </tr>
                </thead>
                <tbody>
                {patients.map((patient, index) => (
                    <tr key={index} onClick={() => handleRowClick(patient)}
                        className={patient.FullName === "Selma Lepka" ? "selma-lepka-row" : ""}
                    >
                        <td>{patient.PID}</td>
                        <td>{patient.FullName}</td>
                        <td>{patient.Sex}</td>
                        <td>{patient.DoB}</td>
                        <td>{patient.Insurance}</td>
                        <td>{patient.LastVisit}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PatientTable;