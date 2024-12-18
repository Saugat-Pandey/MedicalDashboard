import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Button({ children, className, to }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(to);
    }

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
}