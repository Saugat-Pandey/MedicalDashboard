import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Sidebar.css';
import Sidebar from './components/Sidebar.jsx';
import Patients from './pages/Patients.jsx';
import Appointments from './pages/Appointments.jsx';
import NotFound from './pages/404.jsx'; 

function App() {
    return (
        <>
            <div className="app-container">
                <Sidebar/>
                <div className="main-content-container">
                    <Routes>
                        <Route path="/" element={<h1>Welcome to the Dashboard!</h1>} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/appointments" element={<Appointments />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
