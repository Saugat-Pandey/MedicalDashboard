import React from 'react';
import './App.css'
import './components/Sidebar.css'
import Sidebar from './components/Sidebar.jsx';

function App() {
    return (
        <>
            <div className="app-container">
                <Sidebar/> {/* Add the sidebar */}
                <div className="main-content-container">
                    {/* Main content area */}
                    <h1>Welcome to the Dashboard!</h1>
                </div>
            </div>
        </>
    )
}

export default App
