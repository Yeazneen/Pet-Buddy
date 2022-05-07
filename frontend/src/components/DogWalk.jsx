import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function DogWalk() {
  return (
    <div className="DogWalking">
      <Header />
      <Navbar />
      <div className="ServiceScreen">
        <h1 className="Service-name-header">Dog Walking</h1>
        <p>
          Choose from a 30, 45, or 60-minute visit to give your pet their daily
          dose of fun-filled exercise.
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
