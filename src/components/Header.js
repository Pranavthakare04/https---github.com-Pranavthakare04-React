import { useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <div className="logocontainer">
        <img src={logo_url} alt="logo" className="logo" />
      </div>

      {/* Hamburger Menu */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/">
          <h1>Cravyo</h1>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Header;
