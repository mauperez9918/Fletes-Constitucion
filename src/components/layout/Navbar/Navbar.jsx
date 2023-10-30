import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img
          src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1697270598/Fletes%20Constitucion/Constitucion__2_-removebg-preview_ddz1wq.png"
          alt="Logo"
          className="logo"
        />

        <ul>
          <Link to="/" className="btn-navbar">
            <li>Inicio</li>
          </Link>
          <Link to="/vehicles" className="btn-navbar">
            <li>Flota</li>
          </Link>
          <Link to="/contact" className="btn-navbar">
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
