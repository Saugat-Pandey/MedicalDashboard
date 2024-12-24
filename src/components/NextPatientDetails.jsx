import './NextPatientDetails.css'
import { Link } from 'react-router-dom';


export default function NextPatientDetails() {
    return (
        <Link to="/patients-detail" className="next-patient-details-link">
            <div id={"nextPatientDetails"}>
                <h2>Next Patient Details</h2>
                <br/>
                <h3>Selma Lepka</h3>
                <p>DOB Text Text Text Text</p>
                <p>Text Text Text</p>
                <p>Text Text Text</p>
            </div>
        </Link>
    );
}

