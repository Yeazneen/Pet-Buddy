import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
