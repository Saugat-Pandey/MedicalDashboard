import React from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({button_text, to, className}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(to);
    }

    return (
        <button onClick={handleClick} className={className}>
            {button_text}
        </button>
    );
}

Button.propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    button_text: PropTypes.string.isRequired
};