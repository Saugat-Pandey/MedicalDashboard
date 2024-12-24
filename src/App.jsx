import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Sidebar.css';
import './components/PatientsPage.css';
import Dashboard from './pages/Dashboard.jsx';
import Patients from './pages/Patients.jsx';
import Appointments from './pages/Appointments.jsx';
import NotFound from './pages/404.jsx';
import PatientTable from './components/PatientsPage.jsx';
import PatientsDetailPage from "./pages/PatientsDetailPage.jsx";

function App() {
    return (
        <>
            <div className="app-container">
                <div className="main-content-container">
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/patients" element={<Patients/>}/>
                        <Route path="/appointments" element={<Appointments/>}/>
                        <Route path="/patients-detail" element={<PatientsDetailPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
