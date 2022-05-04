import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Shop from './components/Shop';
//import data from './components/data.js';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Shop />
      <Footer />
    </div>
  );
}
