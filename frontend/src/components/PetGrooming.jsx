import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function PetGrooming() {
  return (
    <div className="Appt-Button">
      <Header />
      <Navbar />
      <div className="ServiceScreen">
        <h1 className="Service-name-header">Pet Grooming</h1>
        <p>
          Our team of experienced professionals can help your pet with any
          medical needs.
        </p>
        <div className="Service-Button">
          <Link className="ServiceLink" to={`/login`}>
            Schedule an Appointment
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
