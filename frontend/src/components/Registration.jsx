import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Registration() {
  const { name, setName } = useState('');
  const { userName, setUserName } = useState('');
  const { password, setPassword } = useState('');

  return (
    <div className="RegistrationBody">
      <div className="Header">
        <Header />
      </div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="RegistrationForm">
        <h1>Register</h1>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="text"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
      <div className="Header">
        <Footer />
      </div>
    </div>
  );
}
