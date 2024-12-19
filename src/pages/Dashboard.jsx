import React from 'react';
import './Dashboard.css'
import Sidebar from '../components/Sidebar';
import Calendar from 'react-calendar'
import '/src/components/Calendar.css';
import CurrentDayPatients from "../components/CurrentDayPatients.jsx";
import TinyBarChart from '../components/BarChart.jsx';


function Dashboard() {
    return (
        <div id={"dashboard-container"}>
            <Sidebar/>
            <CurrentDayPatients number={20}/>
            <Calendar/>
            <div id={"barChartWeekPatients"}><TinyBarChart/></div>
        </div>
    );
}

export default Dashboard;
