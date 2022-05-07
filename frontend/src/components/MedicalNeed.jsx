import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function MedicalNeed() {
  return (
    <div className="MedicalNeed">
      <Header />
      <Navbar />
      <div className="ServiceScreen">
        <h1 className="Service-name-header">Medical Need</h1>
        <p>
          Our team of experienced professionals can help your pet with any
          medical needs.
        </p>
        <div className="Appt-Button">
          <Link className="ServiceLink" to={`/login`}>
            Schedule an Appointment
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
