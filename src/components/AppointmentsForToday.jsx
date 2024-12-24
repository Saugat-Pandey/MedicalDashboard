import './AppointmentsForToday.css'
import Button from "./Button.jsx";
import React from "react";

export default function AppointmentsForToday() {
    return (
        <div id={"nextPatientDetails"}>
            <h2>Today&#39;s Appointments</h2>
            <br/>
            <h3>Krishna Adhikari</h3>
            <br></br>
            <p>Text Text Text</p>
            <br></br>
            <p>Text Text Text</p>
            <br></br>
            <p>Text Text Text</p>
            <br></br>
            <p>Text Text Text</p>
            <p>Text Text Text</p>
            <p>Text Text Text</p>
            <p>Text Text Text</p>
            <Button className="nav-button" to="/appointments" button_text="See all"></Button>
        </div>
    );
}

