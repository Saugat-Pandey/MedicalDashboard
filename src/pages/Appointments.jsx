import React from 'react';
import './Appointments.css';
import Sidebar from '../components/Sidebar';

const appointments = [
    { name: 'Krishna Adhikari', time: '12:00', reason: 'Fever',image: 'krishna.jpg' },
    { name: 'Vedant Vedant', time: '12:30', reason: 'Strep Throat',image: 'vedant.jpg' },
    { name: 'Michael Franke', time: '14:00', reason: 'Common Cold',image: 'michael.jpg' },
    { name: 'Saugat Panday', time: '15:00', reason: 'Bronchitis',image: 'saugat.jpg' },
    { name: 'Farina Lepka', time: '15:30', reason: 'Diarrhea',image: 'farina.jpg' },
    { name: 'Selma Sari', time: '16:30', reason: 'Asthma',image: 'selma.jpg' },
    { name: 'Timo Marzinzik', time: '17:30', reason: 'HIV Test',image: 'timo.jpg' }
];

function Appointments() {
    return (
        <div id="appointments-container">
            <Sidebar />
            <div className="appointments-content">
                <h1>Today's Appointments</h1>
                <div className="appointments-table">
                    <div className="appointments-header">
                        <span className="column-image"></span>
                        <span className="column-name">NAME</span>
                        <span className="column-time">TIME</span>
                        <span className="column-reason">REASON</span>
                    </div>
                    {appointments.map((appointment, index) => (
                        <div key={index} className="appointments-row">
                            <span className="column-image">
                                <img
                                    src={`/src/assets/${appointment.image}`}
                                    alt={appointment.name}
                                    className="profile-image"
                                />
                            </span>
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
