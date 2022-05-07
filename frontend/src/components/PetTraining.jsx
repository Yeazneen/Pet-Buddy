import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function PetTraining() {
  return (
    <div className="PetTraining">
      <Header />
      <Navbar />
      <div className="ServiceScreen">
        <h1 className="Service-name-header">Pet Training</h1>
        <p>
          Choose from a 30, 45, or 60-minute training to train your pet to
          improve their behaviour.
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
