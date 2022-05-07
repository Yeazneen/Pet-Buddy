import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="LoginBody">
      <div className="Header">
        <Header />
      </div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="LoginForm">
        <h1>Login</h1>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        <br />
        <p>Don't have an account?</p>
        <div className="rButton">
          <a className="rButton" onClick href={`/register`}>
            Signup
          </a>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
