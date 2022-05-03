import Logo from './Logo.jpeg';
export default function Navbar(props) {
  return (
    <div className="Navbar">
      <img className="Logo" src={Logo} alt={props.alt} />

      <ul className="List">
        <li>
          <a href>Services</a>
        </li>
        <li>
          <a href>Pet Shop</a>
        </li>
        <li>
          <a href>Login</a>
        </li>
      </ul>
    </div>
  );
}
