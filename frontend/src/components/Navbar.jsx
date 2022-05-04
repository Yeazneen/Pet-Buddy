import Logo from './Logo.jpeg';
export default function Navbar(props) {
  return (
    <div className="Navbar">
      <img className="Logo" src={Logo} alt={props.alt} />

      <ul className="List">
        <li>
          <a className="NavList" href={`/services`}>
            Services
          </a>
        </li>
        <li>
          <a className="NavList" href={`/pet-shop`}>
            Pet Shop
          </a>
        </li>
        <li>
          <a className="NavList" href={`/login`}>
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}
