import PropTypes from 'prop-types';
import './NumberDayPatients.css'

export default function NumberDayPatients({number}) {
    return (
        <div id={"currentDayPatients"}>
            <h2>Today&apos;s Patients</h2>
            <h1>{number}</h1>
        </div>
    );
}

NumberDayPatients.propTypes = {
    number: PropTypes.number.isRequired
}