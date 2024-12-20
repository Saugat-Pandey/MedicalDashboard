import React from 'react';
import './Appointments.css';
import Sidebar from '../components/Sidebar';

const appointments = [
    { name: 'Krishna Adhikari', time: '12:00', reason: 'Fever' },
    { name: 'Vedant Vedant', time: '12:30', reason: 'Strep Throat' },
    { name: 'Michael Franke', time: '14:00', reason: 'Common Cold' },
    { name: 'Saugat Panday', time: '15:00', reason: 'Bronchitis' },
    { name: 'Farina Lepka', time: '15:30', reason: 'Diarrhea' },
    { name: 'Selma Sari', time: '16:30', reason: 'Asthma' },
    { name: 'Timo Marzinzik', time: '17:30', reason: 'HIV Test' }
];

function Appointments() {
    return (
        <div id="appointments-container">
            <Sidebar />
            <div className="appointments-content">
                <h1>Today's Appointments</h1>
                <div className="appointments-table">
                    <div className="appointments-header">
                        <span className="column-name">NAME</span>
                        <span className="column-time">TIME</span>
                        <span className="column-reason">REASON</span>
                    </div>
                    {appointments.map((appointment, index) => (
                        <div key={index} className="appointments-row">
                            <span className="column-name">{appointment.name}</span>
                            <span className="column-time">{appointment.time}</span>
                            <span className="column-reason">{appointment.reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Appointments;
