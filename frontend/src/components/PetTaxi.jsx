import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function PetTaxi() {
  return (
    <div className="PetTaxi">
      <Header />
      <Navbar />

      <div className="ServiceScreen">
        <h1 className="Service-name-header">Pet Taxi</h1>
        <p>
          Does your pet need a lift to the groomers, vet, or dog park? We’ve got
          their tail covered.
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
