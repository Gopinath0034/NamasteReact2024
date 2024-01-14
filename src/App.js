import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [change, setChange] = useState("Login");
  const changeButton = () => {
    setChange("LogOut");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="/about">
            <li>About Us</li>
          </a>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <li>Cart</li>
          <button className="login" onClick={changeButton}>
            {change}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
