import PropTypes from 'prop-types';

export default function CurrentDayPatients({number}) {
    return (
        <div>
            <h2>Today&apos;s Patients</h2>
            <h1>{number}</h1>
        </div>
    );
}

CurrentDayPatients.propTypes = {
    number: PropTypes.number.isRequired
}