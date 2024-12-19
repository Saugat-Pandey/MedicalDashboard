import React from 'react';
import './404.css';
import Button from "../components/Button.jsx";

function NotFound() {
    return (
        <div id={"notFound-Container"}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Button id="backToDashboard-button" to="/" button_text="Back to Dashboard"></Button>
        </div>
    );
}

export default NotFound;
