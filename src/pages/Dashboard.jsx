import React from 'react';
import './Dashboard.css'
import Sidebar from '../components/Sidebar';
import Calendar from 'react-calendar'
import '/src/components/Calendar.css';

function Dashboard() {
    return (
        <div id={"dashboard-container"}>
            <div><Sidebar/></div>
            <div id={"calendar-widget"}><Calendar/></div>
            {/* Add content for the Dashboard page here */}
        </div>
    );
}

export default Dashboard;
