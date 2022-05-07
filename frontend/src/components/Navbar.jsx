import Logo from './Yellow-Paws.jpeg';
//import { useHistory } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <nav>
        <a onClick href={`/home`}>
          <img className="Logo" src={Logo} alt={props.alt}></img>
        </a>
        <ul className="List">
          <li>
            <a className="NavList" href={`/services`}>
              Services
            </a>
          </li>
          <li>
            <a className="NavList" href={`/shop`}>
              Pet Shop
            </a>
          </li>
          <li>
            <a className="NavList" onclick href={`/login`}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
