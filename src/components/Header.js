// Header.js
import { Link, NavLink } from "react-router-dom";
// (optional) change logo to your school logo
import logo from "../assets/Logo.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" title="Home" />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>Home</NavLink>
        <NavLink to="/about" className={getClass}>About</NavLink>
        <NavLink to="/diplomas" className={getClass}>Diplomas</NavLink>
        <NavLink to="/register" className={getClass}>Register</NavLink>
        <NavLink to="/faq" className={getClass}>FAQ</NavLink>
      </nav>
    </header>
  );
}
