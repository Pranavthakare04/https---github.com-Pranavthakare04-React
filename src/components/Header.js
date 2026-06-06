import { logo_url } from "../utils/constants";
import {Link} from "react-router";

const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img
          src = {logo_url}
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Header