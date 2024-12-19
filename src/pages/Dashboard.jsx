import React from 'react';
import './Dashboard.css'
import Sidebar from '../components/Sidebar';
import Calendar from 'react-calendar'
import '/src/components/Calendar.css';
import NumberDayPatients from "../components/NumberDayPatients.jsx";
import TinyBarChart from '../components/BarChart.jsx';
import NextPatientDetails from "../components/NextPatientDetails.jsx";
import AppointmentsForToday from "../components/AppointmentsForToday.jsx";


function Dashboard() {
    return (
        <div id={"dashboard-container"}>
            <Sidebar/>
            <div id={"first-column"}>
                <NumberDayPatients number={20}/>
                <Calendar/>
                <div id={"barChartWeekPatients"}><TinyBarChart/></div>
            </div>
            <div id={"second-column"}>
                <NextPatientDetails/>
                <AppointmentsForToday/>
            </div>
        </div>
    );
}

export default Dashboard;
