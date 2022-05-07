import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function PetSitting() {
  return (
    <div className="Petsitting">
      <Header />
      <Navbar />

      <div className="Appt-Button">
        <p>
          Helping your new pup to be a good boy or girl isn't always easy, but
          we're here to help.
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
